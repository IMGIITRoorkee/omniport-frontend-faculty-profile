import React, { Component } from "react";
import {
  Segment,
  Button,
  Icon,
  Form,
  Radio,
  Message,
  Label
} from "semantic-ui-react";
import { upperFirst, snakeCase, startCase } from "lodash"
import axios from "axios";

import { FieldMap } from "../constants/input";
import { ErrorTransition } from "./transition";
import { headers } from "../constants/formPostRequestHeaders";
import {
  urlDownloadCSV,
  urlWriteAppendMultipleObjects
} from "../urls";

import style from "../styles.css";

export class WriteAppendMultipleObjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelName: upperFirst(props.componentName),
      data: {
        "file": null,
        "fileLink": null,
        "uploadType": "append",
      },
      errors: [],
      loading: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.props.handleCsvHide(this.props.componentName);
    }
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  };

  downloadCsv = () => {
    axios({
      method: "get",
      url: urlDownloadCSV(),
      params: {
        model: this.state.modelName
      },
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      const name = response.headers["content-disposition"].split(
        "filename="
      )[1];
      link.href = url;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
    });
  }

  handleFile = (event, file, value, name) => {
    let link = name + "Link";
    this.setState({
      data: {
        ...this.state.data,
        [name]: file,
        [link]: value
      }
    });
    event.target.value = "";
  };

  handleDelete = name => {
    let link = name + "Link";
    this.setState({
      data: {
        ...this.state.data,
        [name]: null,
        [link]: null
      }
    });
  };

  handleChange = (name, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [value.name]: value.value
      }
    });
  };

  handleErrors = error_dict => {
    let dict = error_dict;
    let errors = [];
    for (let key in dict) {
      for (let index in dict[key]) {
        errors.push(startCase(key) + ": " + dict[key][index]);
      }
    }
    this.setState({ errors: errors });
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    let data = new FormData();
    data.append("model", this.state.modelName)
    for (let prop in this.state.data) {
      data.append(snakeCase(prop), this.state.data[prop])
    }
    axios({
        method: "post",
        url: urlWriteAppendMultipleObjects(),
        data: data,
        headers: headers
    }).then(response => {
      this.setState({ loading: false });
      this.props.handleUpdate(response.data, this.props.componentName);
      this.props.handleCsvHide(this.props.componentName);
    }).catch(error => {
        if (error.response.status === 400) {
          this.setState({ loading: false });
          this.handleErrors(error.response.data);
        }
    });
  }

  makeInstructions = affordances => {
    let instructions = [];
    for (let index in affordances) {
      for (let [key, value] of Object.entries(affordances[index])) {
        instructions.push(`${key}: ${value}`)
      }
    }
    return instructions;
  }

  render() {
    const { componentName, affordances, appDetails } = this.props;
    const { modelName, data, errors, loading } = this.state;
    let instructions = this.makeInstructions(affordances);
    let FileComponent = FieldMap['file_field']
    return (
      <Segment basic styleName="style.formMinWidth">
        <Segment attached="top" styleName="style.headingBox">
          <h3 styleName="style.heading">Add {modelName}s via File</h3>
          <Icon
            color="grey"
            name="delete"
            onClick={() => this.props.handleCsvHide(componentName)}
          />
        </Segment>
        <Segment attached styleName="style.formStyle">
          <ErrorTransition errors={errors} />
          <Message
            info
            header={`
              Column headers have to satisfy the below-stated constraints.`
            }
            list={instructions}
          />
          <Form autoComplete="off">
            {data.uploadType === "append"
              ? (
                <Message compact size="tiny">
                  Append: Data from file will be added without{' '}
                  changing existing items.
                </Message>
              )
              : (
                <Message compact size="tiny" color="yellow">
                  <Icon name="warning sign" />
                  New: All the existing items will be deleted{' '}
                  first before adding new.
                </Message>
              )
            }
            <Form.Group inline>
              <label>Type: </label>
              <Form.Field>
                <Radio
                  label="Append"
                  name="uploadType"
                  value="append"
                  checked={data.uploadType === "append"}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="New"
                  name="uploadType"
                  value="new"
                  checked={data.uploadType === "new"}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <FileComponent
                name="file"
                key="file"
                handleFile={this.handleFile}
                handleDelete={this.handleDelete}
                label="File"
                link={data.fileLink}
              />
          </Form>
        </Segment>
        <Segment attached="bottom" styleName="style.headingBox">
          <div>
            <Button
              basic
              animated="fade"
              onClick={this.downloadCsv}
            >
              <Button.Content visible>Download Sample</Button.Content>
              <Button.Content hidden>
                <Icon name='download' />
              </Button.Content>
            </Button>
          </div>
          <div>
            <Button
              loading={loading}
              onClick={this.handleSubmit}
              color={appDetails.theme}
              content="Submit"
              type="submit"
            />
          </div>
        </Segment>
      </Segment>
    );
  }
}
