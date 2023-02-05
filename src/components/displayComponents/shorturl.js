import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import { EditIcon } from '../editIcon'
import style from '../../styles.css'

const ShortURL = props => {

  const rows = []
  for (let index in props.item.allUrls) {
    rows.push(
      <Segment>
        <div styleName='style.flex-box'>
          <List styleName='style.list'>
            <List.Item>
              {props.item.approvalStatus === 'app' ? <List.Icon name='angle double right' /> : <List.Icon name='question' /> }
              <List.Content>{props.item.allUrls[index]}</List.Content>
            </List.Item>
          </List>

          <EditIcon
            onClick={() =>
              props.manageData(props.item.id, props.data, props.componentName)
            }
          />
        </div>
      </Segment>
    )
  }
  return <>
  {rows}
  </>
}

export default ShortURL
