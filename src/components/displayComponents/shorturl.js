import React from 'react'
import { Icon, List, Segment } from 'semantic-ui-react'
import { EditIcon } from '../editIcon'
import style from '../../styles.css'

const ShortURL = props => {
  if(props.item.approvalStatus==='pen'){
    props.item.rejectionReason="shorturl yet to be approved"
  }

  const rows = []
  for (let index in props.item.allUrls) {
    rows.push(
      <Segment>
        <div styleName='style.flex-box'>
          <List styleName='style.list'>
            <List.Item>
              {props.item.approvalStatus === 'app' ? <List.Icon name='angle double right' /> : props.item.approvalStatus === 'dec'?<List.Icon name='exclamation' />:<List.Icon name='question' /> }
              <List.Content>{props.item.allUrls[index]}</List.Content>
            </List.Item>
          </List>
         <div styleName='style.flex-box'>
          {props.item.approvalStatus!=='app'?(
          <div data-tooltip={props.item.rejectionReason} data-position="left center">
          <Icon name='info circle' ></Icon>
          </div>
          ):(<></>)
          }
          <EditIcon
            onClick={() =>
              props.manageData(props.item.id, props.data, props.componentName)
            }
          />
          </div>
        </div>
      </Segment>
    )
  }
  return <>
  {rows}
  </>
}

export default ShortURL
