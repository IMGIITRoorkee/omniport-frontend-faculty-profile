import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";

import style from "../../styles.css";

const TeachingEngagement = props => {
  const { item } = props;
  return (
    <Segment>
      <div styleName="style.flex-box">
        <div>
          <List styleName="style.list">
            <List.Item>
              <List.Content>
                <div>
                  {item.courseTitle} ( {item.courseCode} )
                  <div styleName="style.gray">
                    {item.semester === "s" ? "Spring" : "Autumn"} Semester
                  </div>
                  <div styleName="style.description">
                    Class: {item.className}
                  </div>
                  <div styleName="style.gray">
                    Number of Students: {item.studentCount}
                  </div>
                  {item.lectureHours && (
                    <div styleName="style.gray">
                      Lecture Hours: {item.lectureHours}
                    </div>
                  )}
                  {item.practicalHours && (
                    <div styleName="style.gray">
                      Practical Hours: {item.practicalHours}
                    </div>
                  )}
                  {item.tutorialHours && (
                    <div styleName="style.gray">
                      Tutorial Hours: {item.tutorialHours}
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
export default TeachingEngagement;
