import React from "react";
import { Card, Icon, Image, Dimmer, Segment, Label, Button } from "semantic-ui-react";

import axios from "axios";
import { toast } from 'react-semantic-toasts';

import DefaultDP  from "../../../../../formula_one/src/components/default-dp";
import { getCookie } from "formula_one";

import { headers, jsonHeaders } from "../../constants/formPostRequestHeaders";
import { ProfileForm } from "./profileForm";
import { PublishManager } from "./publishManager";

import { BrowserView, MobileView } from "react-device-detect";

import style from "../../styles.css";

const a_style = {
  'color' : 'green',
  'textDecoration' : 'underline'
}
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
        theme: "blue"
      },
      loading: true,
      person_data: "",
      active: false,
      createNew: true,
      image: null,
      button_load:{
        preview: false,
        publish: false
      }
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = e => {
    const self = this;
    let headers = {
      "X-CSRFToken": getCookie("csrftoken")
    };
    const person_promise = axios
      .get("/kernel/who_am_i/")
      .then(function(response) {
        self.setState({ person_data: response.data });
      })
      .catch(function(error) {
        console.error(error);
      });
    const faculty_promise = axios
      .get("/api/faculty_profile/profile/" )
      .then(response => {
        if (response.data.length != 0) {
          let data = response.data[0];
          self.setState({ data: data, createNew: false });
        } else {
          self.setState({ createNew: true });
        }
      })
      .catch(function(error) {
        console.error(error);
      });
    Promise.all([person_promise, faculty_promise]).then(() => this.setState({loading:false}));
  };

  handleShow = e => {
    this.setState({
      active: true
    });
  };
  handleUpdate = (data, flag, displayPicture) => {
    this.setState({
      active: false,
      data: data,
      createNew: flag,
      person_data: { ...this.state.person_data, displayPicture: displayPicture }
    });
  };
  handleHide = () => {
    this.setState({ active: false });
  };

  onPreview = () => {
    this.setState({
      button_load:{
        ... this.state.button_load,
        preview: true
      }
    });
    axios({
      method: "POST",
      url: "api/faculty_profile/preview",
      data: JSON.stringify({'action': 'preview'}),
      headers: jsonHeaders
    })
      .then(response => {
        const data = response.data;
        const url = "http://cms.channeli.in" + data['url'];
        const description = <p>Click on this  <a href={url} style={a_style} target="_blank">link</a> to preview your profile page </p>
        toast({
          title: 'Preview Profile Page',
          icon: 'print',
          description: description,
          time: 5000
        });
        return 'success';
      })
      .catch(error => {
        console.error(error);
        toast({
          type: 'error',
          title: 'Preview Error',
          icon: 'print',
          description: <p>Some error has occurred. Try previewing your page after some time!</p>,
          time: 2000
        });
        return 'error';
      })
      .finally(code => {
        this.setState({
          button_load:{
            ... this.state.button_load,
            preview: false
          }
        });       
      });
  }

  onPublish = () => {
    this.setState({
      button_load:{
        ... this.state.button_load,
        publish: true
      }
    });
    axios({
      method: "POST",
      url: "api/faculty_profile/preview",
      data: JSON.stringify({'action':'publish'}),
      headers: jsonHeaders
    })
      .then(response => {
        let data = response.data;
        const url = "http://iitr.ac.in" + data['url'];
        const description = <p>Your page will be published at <a href={url} style={a_style} target="_blank">{ url }</a> <br/>Wait some time for content to update.</p>
        toast({
          title: 'Preview Profile Page',
          icon: 'print',
          description: description,
          time: 5000
        });
        return 'success';
      })
      .catch(error => {
        console.error(error);
        toast({
          type: 'error',
          title: 'Preview Error',
          icon: 'print',
          description: <p>Some error has occurred. Try publishing your page after some time!</p>,
          time: 2000
        });
        return 'error';
      })
      .finally(code =>{
        this.setState({
          button_load:{
            ... this.state.button_load,
            publish: false
          }
        });
      });
  }

  render() {
    const desc = this.state.data.description;
    let { theme, changeTheme} = this.props;
    theme = "blue";
    const {handleHide, handleUpdate, onPreview, onPublish} = this;
    const { data, person_data, createNew, loading, button_load} = this.state;
    const ownHandle = data.handle;
    const style = {
      boxShadow: "0 0 0 1px #d4d4d5,0 2px 0 0 #d4d4d5,0 1px 3px 0 #d4d4d5"
    };
    let imageView = <Image centered src={person_data.displayPicture} size="small" circular />;
    if (loading == false && data.facultyMember != "" && person_data.displayPicture == null) {
      imageView = <DefaultDP name={data.facultyMember} size={"2em"}/>
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
            <div className="center aligned content"
                 style={{ border: "0", textAlign: "center" }}>
              {imageView}
            </div>
            <div className="center aligned content"
                 style={{ border: "0", textAlign: "center" }}>
              <Card.Header textAlign="center">{data.faculty}</Card.Header>
              <Card.Meta textAlign="center">
                {data.handle ? "@" : null}
                {data.handle}
              </Card.Meta>
              <Card.Description textAlign="center"> {desc}</Card.Description>
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

          <PublishManager preview={onPreview} publish={onPublish} theme={theme} loading={button_load} />
        </div>
      );
  }
}
