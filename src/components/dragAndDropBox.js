import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Segment, Button, Icon } from "semantic-ui-react";
import { upperFirst } from "lodash";
import axios from "axios";

import { getCookie } from "formula_one";

import style from "../styles.css";

const grid = 8;

export class DragAndDropBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
      element: props.element,
      modelName: upperFirst(props.componentName)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.props.handleDragHide(this.props.componentName);
    }
  };

  getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    ...draggableStyle
  });

  getListStyle = isDraggingOver => ({
    color: "black",
    padding: grid
  });

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = this.reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    this.setState({
      items
    });
  }

  onSubmit = () => {
    var arr = [];
    arr = this.state.items.map(data => data.id);
    let headers = {
      "X-CSRFToken": getCookie("csrftoken")
    };
    const data = {
      model: this.state.modelName,
      order: arr
    };
    axios({
      method: "post",
      url: "/api/faculty_profile/rearrange/",
      data: data,
      headers: headers
    }).then(response => {
      this.props.handleUpdate(response.data, this.props.componentName);
    });
  };

  render() {
    const { element } = this.state;
    const { componentName, appDetails } = this.props;
    let heading = this.state.modelName;
    if (this.state.modelName == "Experience") heading = "Internship";
    return (
      <Segment basic>
        <Segment attached="top" styleName="style.headingBox">
          <h3 styleName="style.heading">Rearrange {heading}</h3>
          <Icon
            color="grey"
            name="delete"
            onClick={() => this.props.handleDragHide(componentName)}
          />
        </Segment>
        <Segment
          styleName="style.formStyle2"
          style={{ width: "40vw" }}
          attached
        >
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" styleName="style.formStyle3">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={this.getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable key={index} draggableId={index} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {React.createElement(
                            element,
                            {
                              item: item,
                              id: item.id,
                              key: item.id,
                              rearrange: true
                            },
                            null
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Segment>
        <Segment attached="bottom" styleName="style.buttonBox">
          <Button color={appDetails.theme} onClick={this.onSubmit}>
            Confirm order
          </Button>
        </Segment>
      </Segment>
    );
  }
}
