import React from "react";
import { connect } from "react-redux";
import { Dropdown, Form } from "semantic-ui-react";
import { handleParentDropdownChange } from "../../actions/dependentDropdown";

class ChoiceField extends React.Component {
  componentDidMount() {
    const {
      handleParentDropdownChange,
      componentName,
      name,
      value,
    } = this.props;

    handleParentDropdownChange(componentName, name, value);
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
    return (
      <Form.Field key={name} required={required}>
        <label>{label}</label>
        <Dropdown
          autoFocus={autoFocus}
          onChange={(e, { name, value }) => {
            handleChange(name, value);
            handleParentDropdownChange(componentName, name, value);
          }}
          name={name}
          options={options}
          placeholder={placeholder}
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
