import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Card, Icon, Popup, Segment, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import style from "../../styles.css";

export function ResumeDownload(props) {
  const { url, theme } = props;
  return (
    <div>
      <BrowserView>
        <Segment
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          {url != null ? (
            <a href={url} target="_blank">
              <Label size="large" color={theme}>
                <Icon name="download" />
                Resume
              </Label>
            </a>
          ) : (
            <Popup
              trigger={
                <Label size="large" color={theme}>
                  <Icon name="download" />
                  Resume
                </Label>
              }
              content="Resume not uploaded"
            />
          )}
          <Link to={""} target="_blank">
            <Label size="large" color={theme}>
              <Icon name="eye" />
              Publish
            </Label>
          </Link>
        </Segment>
      </BrowserView>
      <MobileView>
        <Segment
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          {url != null ? (
            <a href={url} target="_blank">
              <Button icon color={theme}>
                <Icon name="download" />
                Resume
              </Button>
            </a>
          ) : (
            <Popup
              trigger={
                <Button icon color={theme}>
                  <Icon name="download" />
                  Resume
                </Button>
              }
              content="Resume not uploaded"
            />
          )}
          <Link to={""} target="_blank">
            <Button icon color={theme}>
              <Icon name="print" />
              Preview
            </Button>
          </Link>
        </Segment>
      </MobileView>
    </div>
  );

}
