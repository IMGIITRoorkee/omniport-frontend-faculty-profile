import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";
import {
  collaborationOptions,
  reduceValueToText
} from  "../../constants/options";

import style from "../../styles.css";
import { formatCountry } from "../../utils/formatCountry";

const Collaboration = props => {
  const {item, rearrange, data, componentName} = props;
  let level = item.level;
  level = collaborationOptions.reduce(reduceValueToText, level);
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          <List.Content>
            <div>
              {item.topic}
              <div styleName="style.gray">
                with {item.organisation}
                {item.city && ", " + item.city}
                {item.country !== "NONE" ? ", " + formatCountry(item.country) : ""}
              </div>
              { level && <div styleName="style.gray">Level: {level}</div> }
            </div>
          </List.Content>
        </List.Item>

        <div>
          <EditIcon
            rearrange={rearrange}
            onClick={() => props.manageData(item.id, data, componentName)}
          />
        </div>
      </div>
    </Segment>
  );
};
export default Collaboration;