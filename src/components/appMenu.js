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
    return (
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
              name="Education"
              active={activeItem === "Education"}
              onClick={() => {
                this.props.onMenuClick("education");
                this.setState({ activeItem: "Education" });
              }}
            />
            <Menu.Item
              color={theme}
              name="Achievements"
              active={activeItem === "Achievements"}
              onClick={() => {
                this.props.onMenuClick("honour");
                this.setState({ activeItem: "Achievements" });
              }}
            />
            <Menu.Item
              color={theme}
              name="Engagements"
              active={activeItem === "TeachingEngagements"}
              onClick={() => {
                this.props.onMenuClick("teachingEngagement");
                this.setState({ activeItem: "TeachingEngagements" });
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
              name="Events"
              active={activeItem === "Events"}
              onClick={() => {
                this.props.onMenuClick("event");
                this.setState({ activeItem: "Events" });
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
          </Menu>
        </BrowserView>
      </div>
    );
  }
}
