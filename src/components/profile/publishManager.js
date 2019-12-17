import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Card, Icon, Popup, Segment, Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import style from "../../styles.css";

export function PublishManager(props) {

  const {theme, preview, publish, loading} = props;
  const preview_load = loading['preview'];
  const publish_load = loading['publish'];
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
              <Button onClick={preview} icon color={theme} loading={preview_load}>
                <Icon name="print" />
                Preview
              </Button>
              <Button onClick={publish} icon color={theme} loading={publish_load}>
              <Icon name="upload" />
              Publish
            </Button>
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
              <Button onClick={preview} icon color={theme} loading={preview_load}>
                <Icon name="print" />
                Preview
              </Button>

            <Button onClick={publish} icon color={theme} loading={publish_load}>
              <Icon name="upload" />
              Publish
            </Button>
        </Segment>
      </MobileView>
    </div>
  );

}
