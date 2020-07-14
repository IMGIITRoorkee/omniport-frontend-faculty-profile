import React, { Component } from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import { upperFirst } from "lodash"
import axios from "axios";

import style from "../styles.css";

export class CsvIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelName: upperFirst(props.componentName)
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
  		url: "/api/faculty_profile/csv",
  		params: {
        	model: this.state.modelName
      	}
  	});
  }

  render() {
    const { componentName, appDetails } = this.props;
    let heading = this.state.modelName;
    return (
      <Segment basic>
        <Segment attached="top" styleName="style.headingBox">
          <h3 styleName="style.heading">Add {heading}s via CSV</h3>
          <Icon
            color="grey"
            name="delete"
            onClick={() => this.props.handleCsvHide(componentName)}
          />
        </Segment>
        <Segment style={{ width: "30vw" }} attached>
        	<Button color={appDetails.theme} onClick={this.downloadCsv}>
            	Download Sample
          	</Button>
        </Segment>
      </Segment>
    );
  }
}
