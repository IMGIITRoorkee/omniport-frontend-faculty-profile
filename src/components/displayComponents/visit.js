import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";
import { graduationOptionsMap } from "../../constants/graduationOptions";

import style from "../../styles.css";

const Visit = props => {
  console.log("data", data);
  const {item, rearrange, data, componentName} = props;
  console.log(item, "this");
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          <List.Content>
            <div>
              {item.place}
              {item.date ? ", " + item.date: null} 
              <p styleName="style.gray">
                {item.purpose}
              </p>
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
export default Visit;