import React, { Component } from "react";
import ToDoListItem from "./ToDoListItem";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class ToDoList extends Component {
  render() {
    return (
      <div className={"toDoList"}>
        {this.props.todoList.map(todoItem => {
          return (
            <ListGroup>
              <ToDoListItem
                key={todoItem}
                todoItem={todoItem}
                onDeleteToDoItem={this.props.onDeleteToDoItem}
                onToDoItemModified={this.props.onToDoItemModified}
              />
            </ListGroup>
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
