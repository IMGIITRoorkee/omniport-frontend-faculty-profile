import React from "react";
import { connect } from "react-redux";
import { Dropdown, Form } from "semantic-ui-react";
import { handleParentDropdownChange } from "../../actions/dependentDropdown";

class ChoiceField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filteredOptions: this.props.options,
    };
  }
  componentDidMount() {
    const {
      handleParentDropdownChange,
      componentName,
      name,
      value,
    } = this.props;

    handleParentDropdownChange(componentName, name, value);
  }
  handleSearchChange=(e,{searchQuery})=>{
    const filteredOptions = this.props.options.filter((option) =>
      option.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredOptions });
  }

  render() {
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
      handleParentDropdownChange,
    } = this.props;
    const { filteredOptions } = this.state;
    return (
      <Form.Field key={name} required={required}>
        <label>{label}</label>
        <Dropdown
          autoFocus={autoFocus}
          onChange={(e, { name, value }) => {
            handleChange(name, value);
            handleParentDropdownChange(componentName, name, value);
          }}
          onSearchChange={this.handleSearchChange} 
          name={name}
          options={filteredOptions}
          placeholder={placeholder}
          search
          selection
          value={value}
          clearable
        />
      </Form.Field>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dependentDropdownData: state.dependentDropdownData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleParentDropdownChange: (componentName, dropdownName, value) =>
      dispatch(handleParentDropdownChange(componentName, dropdownName, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceField);
