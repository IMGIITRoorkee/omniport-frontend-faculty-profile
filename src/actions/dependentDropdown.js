function handleParentDropdownChange(componentName, dropdownName, value) {
  return {
    type: `HANDLE_PARENT_DROPDOWN`,
    componentName,
    dropdownName,
    value,
  };
}

export { handleParentDropdownChange };
