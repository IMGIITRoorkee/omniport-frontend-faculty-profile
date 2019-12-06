import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";

import style from "../../styles.css";

const TeachingEngagement = props => {
  return (
    <Segment>
      <div styleName="style.flex-box">
        <div>
          <List styleName="style.list">
            <List.Item>
              <List.Content>
                <div>
                  {props.item.courseTitle} ( {props.item.courseCode} ) <br />
                  <p styleName="style.gray">
                    Class: {props.item.className} <br/>
                  </p>
                  <div styleName="style.gray">Number of Students: {props.item.studentCount}</div>
                  {props.item.lectureHours ? <div styleName="style.gray">Lecture Hours: {props.item.lectureHours}</div> : null}
                  {props.item.practicalHours ? <div styleName="style.gray">Practical Hours: {props.item.practicalHours}</div> : null}
                  {props.item.tutorialHours ? <div styleName="style.gray">Tutorial Hours: {props.item.tutorialHours}</div> : null}
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
export default TeachingEngagement;
