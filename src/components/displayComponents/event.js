import React from "react";
import { Modal, Segment, Icon, Image, List } from "semantic-ui-react";
import style from "../../styles.css";
import { formatDate } from "../../utils/formatDate";
import { categoryOptions, roleOptions, reduceValueToText } from  "../../constants/options";
import { EditIcon } from "../editIcon";

export const Event = props => {
  const item = {props};
  const {startDate, endDate, isFullDate} = props.item;
  let {category, role} = props.item;
  category = categoryOptions.reduce(reduceValueToText, category);
  role = roleOptions.reduce(reduceValueToText, role);
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
                  {props.item.name} in {props.item.place}
                  {props.item.category && <div styleName="style.gray">( {category} )</div>}
                  {props.item.sponsor && (
                    <div styleName="style.gray">
                      Sponsored by {props.item.sponsor}
                    </div>
                  )}
                  <div styleName="style.gray">{duration}</div>
                  <div styleName="style.gray">Role: {role}</div>
                  {props.item.description && (
                    <div styleName="style.description">
                      {props.item.description}
                    </div>
                  )}
                </div>
              </List.Content>
            </List.Item>
          </List>
        </div>
        <div>
          <EditIcon
            rearrange={props.rearrange}
            onClick={() => props.manageData(props.item.id, props.data, props.componentName)}
          />
        </div>
      </div>
    </Segment>
  );
};
export default Event;
