import React from "react";
import { Form, Button, Icon, Dropdown, Segment } from "semantic-ui-react";
import axios from "axios";

import { EditUpload } from "../input_fields/editUpload";
import style from "../../styles.css";
import { ComponentTransition, ErrorTransition } from "../transition";

import { headers } from "../../constants/formPostRequestHeaders";
import { themeOptions } from "../../constants/themeOptions";

import { ProfileImagePreview } from "./profileImagePreview";
import { Crop } from "./crop";
import { debounce } from "./../../utils/debounce";

export class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ...props.data,
        personalWebsite:
          props.data && props.data.personalWebsite
            ? props.data.personalWebsite.split(",").map((url) => url.trim())
            : [""],
      },
      createNew: props.createNew,
      resumeLink: props.data.resume,
      resume: null,
      theme: this.props.theme,
      list: null,
      errors: [],
      image: props.person_data.displayPicture,
      img_file: "",
      initial_handle: props.data.handle,
      handleFieldProperties: { loading: false, color: null, name: null },
      crop: false,
      crop_image: "",
    };
    this.checkHandleWithDebounce = debounce(this.checkHandle, 1000);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleEscape, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape, false);
  }
  handleEscape = (e) => {
    if (e.keyCode === 27) {
      this.props.handleHide();
    }
    if (e.keyCode === 13) {
      this.handleErrors();
    }
  };
  isHandleAllowed = (allowed) => {
    if (allowed == true) {
      this.setState({ handleAvailable: true });
      this.setState({
        handleFieldProperties: {
          loading: false,
          color: "green",
          name: "check",
        },
      });
    } else {
      this.setState({ handleAvailable: false });
      this.setState({
        handleFieldProperties: { loading: false, color: "red", name: "times" },
      });
    }
  };
  checkHandle = (name) => {
    if (name != "handle") return;
    const value = this.state.data.handle;
    axios
      .get("/api/faculty_profile/profile/" + value + "/handle/")
      .then((response) => {
        let valid = response.data;
        if (valid == "yes") {
          this.isHandleAllowed(true);
        } else if (valid == "no" && value == this.props.data.handle) {
          this.isHandleAllowed(true);
        } else {
          this.isHandleAllowed(false);
        }
      })
      .catch((error) => {
        this.isHandleAllowed(false);
      });
  };
  handleChange = (event, { name, value }) => {
    event.persist();
    if (this.state.data.hasOwnProperty(name)) {
      this.setState({ data: { ...this.state.data, [name]: value } });
    }
    if (name == "handle") {
      this.setState({
        handleFieldProperties: { loading: true, color: "green", name: null },
      });
      this.checkHandleWithDebounce(name);
    }
  };
  handleSubmit = (e) => {
    let { data, createNew, resume, resumeLink, image, img_file } = this.state;

    let { handleUpdate } = this.props;
    let request = new FormData(); // create a form object to attach the image data and the other profile information

    request.append("handle", data.handle);
    request.append("theme", data.theme);
    request.append("description", data.description);
    request.append("personalWebsite", data.personalWebsite.join(","));

    if (resumeLink != null && resume != null) {
      request.append("resume", this.state.resume);
    } else if (resume == null && resumeLink != null) {
    } else if (resume == null && resumeLink == null) {
      request.append("resume", "");
    }

    if (image != "" && img_file != "") {
      request.append("image", img_file);
    } else if (img_file == "" && image != "") {
    } else if (img_file == "" && image == "") {
      request.append("image", null);
    }

    let request_type = createNew ? "post" : "patch";
    let url = "api/faculty_profile/profile/";
    if (!createNew) url += this.state.data.id + "/";

    axios({
      method: request_type,
      data: request,
      url,
      headers,
    }).then((response) => {
      let data = response.data;
      let displayPicture = data.displayPicture;
      if (displayPicture != null) {
        displayPicture = displayPicture;
      }
      handleUpdate(data, false, displayPicture);
    });
  };

  handleWebsiteChange = (e, index) => {
    const updatedWebsites = [...this.state.data.personalWebsite];
    updatedWebsites[index] = e.target.value;

    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        personalWebsite: updatedWebsites,
      },
    }));
  };

  handleAddUrl = () => {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        personalWebsite: [...prevState.data.personalWebsite, ""],
      },
    }));
  };

  handleRemoveUrl = () => {
    this.setState((prevState) => {
      if (prevState.data.personalWebsite.length > 1) {
        return {
          data: {
            ...prevState.data,
            personalWebsite: prevState.data.personalWebsite.slice(0, -1),
          },
        };
      }
      return null;
    });
  };

  handleFile = (event) => {
    this.setState({
      resume: event.target.files[0],
      resumeLink: event.target.value,
    });
    event.target.value = null;
  };
  handleDelete = () => {
    this.setState({
      resume: null,
      resumeLink: null,
    });
  };
  handleErrors = () => {
    let errors = [];
    // need lots of code refactoring, why theme is in data also? pass theme using mapstatetoprops, create a change theme function
    const { handle, description, faculty } = this.state.data;
    const { createNew } = this.state;

    if (handle == "") {
      errors.push("Handle must be filled");
    }
    if (description == "") {
      errors.push("Description must be filled");
    }
    axios({
      method: "get",
      url: "/api/faculty_profile/profile/" + handle + "/handle/",
      headers: headers,
    })
      .then((response) => {
        if (createNew == true || response.data.faculty != faculty) {
          errors.push("Handle is already taken");
        }
        if (errors.length > 0) {
          this.setState({ errors: errors });
        } else {
          this.setState({ errors: [] }, () => {
            // this.props.changeTheme(theme);
            if (this.state.update == false) this.handleSubmit();
            else this.handleSubmit();
          });
        }
      })
      .catch((error) => {
        if (errors.length > 0) {
          this.setState({ errors: errors });
        } else {
          this.setState({ errors: [] }, () => {
            // this.props.changeTheme(theme);
            if (this.state.update == false) this.handleSubmit();
            else this.handleSubmit();
          });
        }
      });
  };
  handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      const image = reader.result;
      this.setState({
        img_file: file,
        image: image,
      });
    };

    reader.readAsDataURL(file);
  };

  cropImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      const image = reader.result;
      this.setState({
        crop_image: image,
        crop: true,
      });
    };

    reader.readAsDataURL(file);
  };
  removeImage = () => {
    this.setState({ image: "", img_file: "" });
  };

  cancelCrop = () => {
    this.setState({ crop: false, crop_image: "" });
  };

  setImage = (crop_image, croppedImageUrl) => {
    this.setState({
      img_file: crop_image,
      image: croppedImageUrl,
      crop: false,
      crop_image: "",
    });
  };

  render() {
    const {
      handleWebsiteChange,
      handleAddUrl,
      handleRemoveUrl,
      handleFile,
      handleImageChange,
      handleDelete,
      removeImage,
      handleChange,
      handleErrors,
      cancelCrop,
      setImage,
    } = this;
    const { image, resumeLink, errors, data, crop, crop_image } = this.state;
    const { handleHide, theme } = this.props;
    const { name, color, loading } = this.state.handleFieldProperties;
    const buttonClass = "ui " + theme + " button";
    let res = (
      <Form.Field>
        <input
          type="file"
          onChange={handleFile}
          styleName="style.inputfile"
          id="embedpollfileinput1"
        />
        <div styleName="style.inputLabel">
          <label htmlFor="embedpollfileinput1" className={buttonClass}>
            <i className="ui upload icon" />
            Upload Resume
          </label>
        </div>
      </Form.Field>
    );
    let imagePreview = (
      <div>
        <input
          type="file"
          onChange={this.cropImageChange}
          styleName="style.inputfile"
          id="embedpollfileinput"
        />
        <div styleName="style.inputLabel">
          <label htmlFor="embedpollfileinput" className={buttonClass}>
            <i className="ui upload icon" />
            Upload profile image
          </label>
        </div>
      </div>
    );
    if (image) {
      imagePreview = (
        <ProfileImagePreview
          imagePreviewUrl={image}
          removeImage={removeImage}
        />
      );
    }

    if (resumeLink) {
      res = (
        <Form.Field>
          <EditUpload name={"resume"} handleDelete={handleDelete} />
        </Form.Field>
      );
    }
    let Cropper = null;
    if (crop) {
      Cropper = (
        <Crop src={crop_image} cancelCrop={cancelCrop} setImage={setImage} />
      );
    }
    return crop ? (
      Cropper
    ) : (
      <ComponentTransition>
        <div style={{ minWidth: "350px" }}>
          <Segment attached="top" styleName="style.headingBox">
            <h3 styleName="style.heading">Profile</h3>
            <Icon color="grey" name="delete" onClick={handleHide} />
          </Segment>
          <Segment attached styleName="style.formStyle">
            <ErrorTransition errors={errors} />
            <Form autoComplete="off">
              <Form.Field>{imagePreview}</Form.Field>
              <Form.Field>
                <Form.Input
                  required
                  icon
                  label="Handle"
                  onChange={handleChange}
                  value={data.handle}
                  name="handle"
                  placeholder="Change your handle"
                  loading={loading}
                >
                  <Icon name={name} color={color} />
                  <input />
                </Form.Input>
              </Form.Field>
              <Form.Field>
                <label>Personal Website(s)</label>
                {this.state.data.personalWebsite.map((url, index) => (
                  <Form.Input
                    key={index}
                    value={url}
                    placeholder={"Add personal website url"}
                    onChange={(e) => this.handleWebsiteChange(e, index)}
                  />
                ))}
                <Button onClick={handleAddUrl} color="blue" type="button">
                  Add URL
                </Button>
                {data.personalWebsite.length > 1 && (
                  <Button onClick={handleRemoveUrl} color="red" type="button">
                    Remove Last URL
                  </Button>
                )}
              </Form.Field>
              <Form.Field required styleName="style.themeField">
                <label>Theme</label>
                <Dropdown
                  onChange={handleChange}
                  name="theme"
                  options={themeOptions}
                  placeholder="Choose theme options"
                  selection
                  value={data.theme}
                />
              </Form.Field>
              <Form.Field>
                <Form.TextArea
                  required
                  label="Description"
                  onChange={handleChange}
                  value={data.description}
                  name="description"
                  placeholder="Describe yourself"
                />
              </Form.Field>

              {res}
            </Form>
          </Segment>

          <Segment attached="bottom" styleName="style.buttonBox">
            <Button onClick={handleErrors} color={"blue"} type="submit">
              Submit
            </Button>
          </Segment>
        </div>
      </ComponentTransition>
    );
  }
}
