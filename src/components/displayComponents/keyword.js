import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";

import style from "../../styles.css";

const KeyWord = props => {

  return (
    <Segment>
      <div styleName="style.flex-box">
        <List styleName="style.list">
          <List.Item>
            <List.Content>{props.item.keyword}</List.Content>
          </List.Item>
        </List>

        <EditIcon
          rearrange={props.rearrange}
          onClick={() => props.manageData(props.item.id, props.data, props.componentName)}
        />
      </div>
    </Segment>
  );
};

export default KeyWord;
