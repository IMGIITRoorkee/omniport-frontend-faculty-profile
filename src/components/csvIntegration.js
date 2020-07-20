import React, { Component } from "react";
import { Segment, Button, Icon, Form, Radio } from "semantic-ui-react";
import { upperFirst, snakeCase, startCase } from "lodash"
import axios from "axios";

import { FieldMap } from "../constants/input";
import { ErrorTransition } from "./transition";
import { headers } from "../constants/formPostRequestHeaders";
import { urlWriteAppendMultipleObjects } from "../urls";

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
  };

  downloadCsv = () => {
    axios({
      method: "get",
      url: urlWriteAppendMultipleObjects(),
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
    if (this.state.data.fileLink == null) {
      this.setState({ 
        errors: ["You need to upload file before submitting."]
      })
    } else {
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
          this.props.handleUpdate(response.data, this.props.componentName);
          this.props.handleCsvHide(this.props.componentName);
        }).catch(error => {
            if (error.response.status === 400) {
              this.handleErrors(error.response.data);
            }
        });
      }
  }

  render() {
    const { componentName, appDetails } = this.props;
    let heading = this.state.modelName;
    let FileComponent = FieldMap['file_field']
    return (
      <Segment basic styleName="style.csvMinWidth">
        <Segment attached="top" styleName="style.headingBox">
          <h3 styleName="style.heading">Add {heading}s via File</h3>
          <Icon
            color="grey"
            name="delete"
            onClick={() => this.props.handleCsvHide(componentName)}
          />
        </Segment>
        <Segment attached styleName="style.formStyle">
          <ErrorTransition errors={this.state.errors} />
          <Form autoComplete="off">
            <Form.Group inline>
              <label>Type: </label>
              <Form.Field>
                <Radio
                  label="Append"
                  name="uploadType"
                  value="append"
                  checked={this.state.data.uploadType == "append"}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="New"
                  name="uploadType"
                  value="new"
                  checked={this.state.data.uploadType == "new"}
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
                link={this.state.data.fileLink}
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
