import React from "react";
import { List, Segment } from "semantic-ui-react";
import { EditIcon } from "../editIcon";
import { graduationOptionsMap } from "../../constants/graduationOptions";

import style from "../../styles.css";
import { formatCountry } from "../../utils/formatCountry";

const Honour = props => {
  const {item, rearrange, data, componentName} = props;
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          <List.Content>
            <div>
              {item.award} 
              <p styleName="style.gray">
                {item.organisation + ", "}
                {item.placeOfAward && item.placeOfAward + ", "}
                {item.city && item.city + ", "}
                {item.country !== "NONE" ? formatCountry(item.country) + ", " : ""}
                {item.year}
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
export default Honour;