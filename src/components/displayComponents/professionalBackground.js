import React from "react";
import { Segment,  List } from "semantic-ui-react";
import style from "../../styles.css";
import { formatDate } from "../../utils/formatDate";
import { EditIcon } from "../editIcon";

export const ProfessionalBackground = props => {
  const { item } = props
  const {startDate, endDate, isFullDate} = props.item;  
  const date = formatDate(startDate, endDate, isFullDate); 
  let duration = date.startDate;
  if(date.startDate != date.endDate) duration += " to " + date.endDate;
  return (
    <Segment>
      <div styleName="style.flex-box">
        <div>
          <List styleName="style.list">
            <List.Item>
              <List.Content>
                <div>
                  {item.position} in {item.organisation}
                  <div styleName="style.gray">{duration}</div>
                  {item.description && <div styleName="style.description">{item.description}</div>}
                </div>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <div>
          <EditIcon
            rearrange={props.rearrange}
            onClick={() => props.manageData(item.id, props.data, props.componentName)}
          />
        </div>
      </div>
    </Segment>
  );
};
export default ProfessionalBackground
