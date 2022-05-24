import React, { Component } from 'react'
import { Divider, Header } from 'semantic-ui-react'
export class SectionDivider extends Component {
  render () {
    return (
      <Divider horizontal id={this.props.heading.toLowerCase()}>
        <Header as='h4' >
          {this.props.heading}
        </Header>
      </Divider>
    )
  }
}
