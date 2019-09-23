import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Menu } from "semantic-ui-react";

import style from "./../styles.css";

export class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Interests" };
  }
  render() {
    const { activeItem } = this.state;
    const { theme } = this.props;
    const menu = (
      <div styleName="style.appMenu">
        <BrowserView>
          <Menu size="small" fluid icon="labeled" stackable widths={8}>
            <Menu.Item
              color={theme}
              name="Interests"
              active={activeItem === "Interests"}
              onClick={() => {
                this.props.onMenuClick("interest");
                this.setState({ activeItem: "Interests" });
              }}
            />
            <Menu.Item
              color={theme}
              name="Accomplishments"
              active={activeItem === "Accomplishments"}
              onClick={() => {
                this.props.onMenuClick("education");
                this.setState({ activeItem: "Accomplishments" });
              }}
            />
            <Menu.Item
              color={theme}
              name="Associations"
              active={activeItem === "Associations"}
              onClick={() => {
                this.props.onMenuClick("collaboration");
                this.setState({ activeItem: "Associations" });
              }}
            />
            <Menu.Item
              color={theme}
              name="Projects"
              active={activeItem === "Projects"}
              onClick={() => {
                this.props.onMenuClick("project");
                this.setState({ activeItem: "Projects" });
              }}
            />

            <Menu.Item
              color={theme}
              name="Publications"
              active={activeItem === "Publications"}
              onClick={() => {
                this.props.onMenuClick("book");
                this.setState({ activeItem: "Publications" });
              }}
            />

            <Menu.Item
              color={theme}
              name="References"
              active={activeItem === "References"}
              onClick={() => {
                this.props.onMenuClick("referee");
                this.setState({ activeItem: "References" });
              }}
            />
          </Menu>
        </BrowserView>
      </div>
    );
    return <div> {menu} </div>;
  }
}
