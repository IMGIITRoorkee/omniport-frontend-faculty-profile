import React from "react";

import {List, Segment} from "semantic-ui-react";

import { EditIcon } from "../editIcon";
import { formatDate } from "../../utils/formatDate";
import { supervisionOptionsMap } from "../../constants/options";
import style from "../../styles.css";

const Supervision = props => {
    const {item, rearrange, data, componentName} = props;
    const {startDate, endDate, isFullDate} =  item;
    const date = formatDate(startDate, endDate, isFullDate);
    let duration = date.startDate;
    if(date.startDate != date.endDate) duration += " to " + date.endDate;
    return (
        <Segment>
            <div styleName="style.flex-box">
                <List.Item>
                    <List.Content>
                        <div>
                            {item.topic + " "} {"( " + supervisionOptionsMap[item.category] + " )"}
                            <div styleName="style.gray">{duration}</div>
                            <div styleName="style.gray">{item.scholarsName}</div>
                            {item.nameOfOtherSupervisors === "" ? null : (<div styleName="style.gray">Other supervisors: {item.nameOfOtherSupervisors}</div>)}
                            {item.description === "" ? null : (<div styleName="style.description">{item.description}</div>)}
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
    )
}

export default Supervision;