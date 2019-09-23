import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";
import { graduationOptionsMap } from "../../constants/graduationOptions";

import style from "../../styles.css";

const AssociateScholar = props => {
  const {item, rearrange, data, componentName} = props;
  console.log(item, "this");
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          <List.Content>
            <div>
              {item.scholarName} 
              <p styleName="style.gray">
                {item.institution}
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
export default AssociateScholar;