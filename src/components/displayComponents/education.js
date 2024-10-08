import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";
import { graduationOptionsMap } from "../../constants/graduationOptions";
import { formatCountry } from "../../utils/formatCountry";

import style from "../../styles.css";

const Education = props => {
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          {/*  */}
          <List.Content>
            <div>
              {props.item.degree} -{" "}
              {graduationOptionsMap[props.item.graduation]}{" "}
              {props.item.field && `in ${props.item.field}`}
              <p styleName="style.gray">
                {props.item.institute + ", "}
                {props.item.city && props.item.city + ", "}
                {props.item.state && props.item.state + ", "}
                {props.item.country !== "NONE" ? formatCountry(props.item.country) + ", " : ""}
                {props.item.year}
              </p>
            </div>
          </List.Content>
        </List.Item>

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
export default Education;
