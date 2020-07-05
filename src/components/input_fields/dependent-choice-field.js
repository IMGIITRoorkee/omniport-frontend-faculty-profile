import React from "react";
import { Dropdown, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { isEqual } from "lodash";

class DependentChoiceField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { componentName } = nextProps;
    if (
      isEqual(
        nextProps.dependentDropdownData[componentName],
        nextProps.dependencies
      )
    ) {
      return {
        visible: true,
      };
    } else {
      return {
        visible: false,
      };
    }
  }
  render() {
    const {
      name,
      value,
      options,
      placeholder,
      handleChange,
      required,
      label,
    } = this.props;
    return (
      <React.Fragment>
        {this.state.visible && (
          <Form.Field key={name} required={required}>
            <label>{label}</label>
            <Dropdown
              onChange={(e, { name, value }) => handleChange(name, value)}
              name={name}
              options={options}
              placeholder={placeholder}
              selection
              value={value}
              clearable
            />
          </Form.Field>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dependentDropdownData: state.dependentDropdownData,
  };
};

export default connect(mapStateToProps)(DependentChoiceField);
