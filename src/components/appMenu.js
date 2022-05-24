import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Menu } from "semantic-ui-react";

import style from "./../styles.css";

// Navbar items must be an ordered collection
const NAV_ITEMS = [
  { id: "interest", label: "Interests" },
  { id: "biosketch", label: "Biosketch" },
  { id: "research", label: "Research" },
  { id: "honours and awards", label: "Honours and Awards" },
  { id: "teaching engagements", label: "Engagements" },
  { id: "students", label: "Students" },
  { id: "miscellaneous", label: "Miscellaneous" },
]

export class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "Interests" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateNavbar);
    this.updateNavbar();
  }

  updateNavbar = () => {
    for (const item of NAV_ITEMS) {
      const element = document.getElementById(item.id);
      if (window.scrollY >= element.offsetTop + 30) {
        this.setState({ activeItem: item.label });
      }
    }
  }

  render() {
    const { activeItem } = this.state;
    const { theme } = this.props;
    return (
      <div styleName="style.appMenu">
        <BrowserView>
          <Menu size="small" fluid icon="labeled" stackable widths={7}>
            {NAV_ITEMS.map(item => (
              <Menu.Item
                color={theme}
                name={item.label}
                active={activeItem === item.label}
                onClick={() => {
                  this.props.onMenuClick(item.id);
                  this.setState({ activeItem: item.label });
                }}
              />
            ))}
          </Menu>
        </BrowserView>
      </div>
    );
  }
}
