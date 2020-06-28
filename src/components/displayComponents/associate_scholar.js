import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";

import style from "../../styles.css";

const AssociateScholar = props => {
  const {item, rearrange, data, componentName} = props;
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          <List.Content>
            <div>
              {item.scholarName}
              <div styleName="style.gray">Institution: {item.institution}</div>
              {item.interest && (
                <div styleName="style.gray">Interest: {item.interest}</div>
              )}
              {item.homePage && (
                <div styleName="style.gray">
                  Home page:{' '}
                  <a
                    target="_blank"
                    href={item.homePage}
                    rel="noopener noreferrer"
                    styleName="style.gray"
                  >
                    {item.homePage}
                  </a>
                </div>
              )}
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