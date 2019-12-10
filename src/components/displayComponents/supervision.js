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
                            <p styleName="style.gray">
                                {duration}
                                <br/>

                               Scholars: {item.scholarsName} 
                                <br/>

                               Other supervisors: {item.nameOfOtherSupervisors}
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
    )
}

export default Supervision;