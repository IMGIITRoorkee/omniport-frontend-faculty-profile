import React from "react";
import { connect } from "react-redux";

import { components } from "./genericComponents";

import Interest from "../components/displayComponents/interest";
import Education from "../components/displayComponents/education";
import Honour from "../components/displayComponents/honour";
import Visit from "../components/displayComponents/visit";
import Collaboration from "../components/displayComponents/collaboration";
import AssociateScholar from "../components/displayComponents/associate_scholar";
import Supervision from "../components/displayComponents/supervision";
import Project from "../components/displayComponents/project";
import Book from "../components/displayComponents/book";
import Paper from "../components/displayComponents/paper";
import TeachingEngagement from "../components/displayComponents/teaching_engagement";
import Event from "../components/displayComponents/event";
import Membership from "../components/displayComponents/membership";
import AdministrativePosition from "../components/displayComponents/administrativePosition";

//can use eval() method to reduce the code
export const displayComponents = {
  interest: Interest,
  education: Education,
  honour: Honour,
  collaboration: Collaboration,
  associateScholar: AssociateScholar,
  membership: Membership,
  visit: Visit,
  supervision: Supervision,
  project: Project,
  event: Event,
  book: Book,
  paper: Paper,
  teachingEngagement: TeachingEngagement,
  administrativePosition: AdministrativePosition
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
