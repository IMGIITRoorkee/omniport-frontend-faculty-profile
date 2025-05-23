import React from "react";
import { Card, Icon, Image, Dimmer, Segment } from "semantic-ui-react";

import axios from "axios";

import DefaultDP from "../../../../../formula_one/src/components/default-dp";
import { getCookie } from "formula_one";

import { ProfileForm } from "./profileForm";
import { urlCmsIntegration } from "../../urls";

import style from "../../styles.css";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        handle: "",
        description: "",
        faculty: "",
        customWebsite: false,
        resume: null,
        displayPicture: null,
        theme: "blue",
      },
      loading: true,
      person_data: "",
      active: false,
      createNew: true,
      image: null,
      cmsIntegration: false,
      CmsIntegrationComponent: <></>,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (e) => {
    const self = this;
    let headers = {
      "X-CSRFToken": getCookie("csrftoken"),
    };
    const person_promise = axios
      .get("/kernel/who_am_i/")
      .then(function (response) {
        self.setState({ person_data: response.data });
      })
      .catch(function (error) {
        // console.error(error);
      });
    const faculty_promise = axios
      .get("/api/faculty_profile/profile/")
      .then((response) => {
        if (response.data.length != 0) {
          let data = response.data[0];
          self.setState({ data: data, createNew: false });
        } else {
          self.setState({ createNew: true });
        }
      })
      .catch(function (error) {
        // console.error(error);
      });
    const cmsIntegrationPromise = axios
      .get(urlCmsIntegration())
      .then((response) => {
        if (response.status === 200) {
          this.setState(
            {
              cmsIntegration: true,
              CmsIntegrationComponent: React.lazy(() =>
                import("./cmsIntegration")
              ),
            },
            () => {}
          );
        }
      })
      .catch((error) => {
        console.error(error.response.data);
      });
    Promise.all([person_promise, faculty_promise, cmsIntegrationPromise]).then(
      () => this.setState({ loading: false })
    );
  };

  handleShow = (e) => {
    this.setState({
      active: true,
    });
  };
  handleUpdate = (data, flag, displayPicture) => {
    this.setState({
      active: false,
      data: data,
      createNew: flag,
      person_data: {
        ...this.state.person_data,
        displayPicture: displayPicture,
      },
    });
  };
  handleHide = () => {
    this.setState({ active: false });
  };

  render() {
    let { theme, changeTheme } = this.props;
    theme = "blue";
    const { handleHide, handleUpdate } = this;
    const {
      data,
      person_data,
      createNew,
      loading,
      cmsIntegration,
      CmsIntegrationComponent,
    } = this.state;
    const style = {
      boxShadow: "0 0 0 1px #d4d4d5,0 2px 0 0 #d4d4d5,0 1px 3px 0 #d4d4d5",
    };
    let imageView = (
      <Image centered src={person_data.displayPicture} size="small" circular />
    );
    if (
      loading == false &&
      data.facultyMember != "" &&
      person_data.displayPicture == null
    ) {
      imageView = (
        <DefaultDP
          gravatarHash={person_data.gravatarHash}
          name={data.facultyMember}
          size={"7em"}
        />
      );
    }
    if (data)
      return (
        <div style={{ position: "sticky", top: 0 }}>
          <Card as={Segment} color={theme} style={style} fluid>
            <Card.Content>
              <div styleName="style.headingBox">
                <h3 styleName="style.heading" />
                <Icon name="edit" onClick={this.handleShow} color="grey" />
              </div>
            </Card.Content>
            <div
              className="center aligned content"
              style={{ border: "0", textAlign: "center" }}
            >
              {imageView}
            </div>
            <div
              className="center aligned content"
              style={{ border: "0", textAlign: "center" }}
            >
              <Card.Header textAlign="center">{data.faculty}</Card.Header>
              <Card.Meta textAlign="center">
                {data.handle ? "@" : null}
                {data.handle}
              </Card.Meta>
              <Card.Description textAlign="center">
                {data.description}
              </Card.Description>
              <Card.Description styleName="style.personalWebsite">
                {(data.personalWebsite || "")
                  .split(",")
                  .map((url) => url.trim().replace(/;+$/, "")) 
                  .filter((url) => url) 
                  .map((url, index) => (
                    <div key={index}>
                      <a target="_blank" href={url} rel="noopener noreferrer">
                        {url}
                      </a>
                      </div>
                  ))}
              </Card.Description>
            </div>
            <Dimmer active={this.state.active} page>
              <ProfileForm
                theme={theme}
                data={data}
                person_data={person_data}
                createNew={createNew}
                handleHide={handleHide}
                handleUpdate={handleUpdate}
                changeTheme={changeTheme}
              />
            </Dimmer>
          </Card>

          {cmsIntegration && <CmsIntegrationComponent theme={theme} />}
        </div>
      );
  }
}
