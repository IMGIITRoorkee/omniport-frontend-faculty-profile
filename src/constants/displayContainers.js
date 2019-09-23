import React from "react";
import { connect } from "react-redux";

import { components } from "./genericComponents";

import Interest from "../components/displayComponents/interest";
import Education from "../components/displayComponents/education";
import Honour from "../components/displayComponents/honour";
import Visit from "../components/displayComponents/visit";
import Collaboration from "../components/displayComponents/collaboration";
import AssociateScholar from "../components/displayComponents/associate_scholar";
import Project from "../components/displayComponents/project";
import Book from "../components/displayComponents/book";
import Paper from "../components/displayComponents/paper";

//can use eval() method to reduce the code
export const displayComponents = {
  interest: Interest,
  education: Education,
  honour: Honour,
  collaboration: Collaboration,
  associateScholar: AssociateScholar,
  visit: Visit,
  project: Project,
  book: Book,
  paper: Paper,
};

const mapStateToProps = state => {
  return { appDetails: state.appDetails };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const list = {};
for (let index in components) {
  let componentName = components[index];
  // this was giving blank screen for sometime
  // let displayComponent = import(`../components/displayComponents/${componentName}`);
  let displayComponent = displayComponents[componentName];
  list[componentName] = connect(
    mapStateToProps,
    mapDispatchToProps
  )(displayComponent);
}
export const displayContainers = list;
