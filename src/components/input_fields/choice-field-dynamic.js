import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Form } from 'semantic-ui-react'
import { handleParentDropdownChange } from '../../actions/dependentDropdown'
import axios from 'axios'

class ChoiceFieldDynamic extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      opt: []
    }
  }

  componentDidMount () {
    const {
      handleParentDropdownChange,
      componentName,
      name,
      value
    } = this.props
    let url = '/api/faculty_profile/address/'

    axios
      .options(url)
      .then(res => {
        let country = res.data.actions.POST.country.choices
        for (let index in country) {
          country[index]['key'] = country[index]['value']
          country[index]['text'] = country[index]['displayName']
        }
        return country
      })
      .then(data => this.setState({ opt: data }))
      .catch(err => {
        console.log(err)
      })

    handleParentDropdownChange(componentName, name, value)
  }

  render () {
    const { opt } = this.state
    const {
      name,
      componentName,
      value,
      options,
      placeholder,
      handleChange,
      required,
      label,
      autoFocus,
      handleParentDropdownChange
    } = this.props
    return (
      <Form.Field key={name} required={required}>
        <label>{label}</label>
        <Dropdown
          autoFocus={autoFocus}
          onChange={(e, { name, value }) => {
            handleChange(name, value)
            handleParentDropdownChange(componentName, name, value)
          }}
          name={name}
          options={opt}
          placeholder={placeholder}
          selection
          value={value}
          clearable
          search
        />
      </Form.Field>
    )
  }
}

const mapStateToProps = state => {
  return {
    dependentDropdownData: state.dependentDropdownData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleParentDropdownChange: (componentName, dropdownName, value) =>
      dispatch(handleParentDropdownChange(componentName, dropdownName, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceFieldDynamic)
