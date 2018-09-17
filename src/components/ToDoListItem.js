import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class ToDoListItem extends Component {
  isDoneInput = React.createRef();

  handleClick = () => {
    this.props.onDeleteToDoItem(this.props.todoItem.id);
  };

  handleCheckClick = () => {
    if (this.isDoneInput.current.checked) {
      let todoItemModified = this.props.todoItem;
      todoItemModified.isDone = true;
      this.props.onToDoItemModified(todoItemModified);
    } else {
      let todoItemModified = this.props.todoItem;
      todoItemModified.isDone = false;
      this.props.onToDoItemModified(todoItemModified);
    }
  };

  render() {
    let itemIsUrgentClassName = this.props.todoItem.isUrgent
      ? " toDoList_item_urgent"
      : "toDoList_item";
    return (
      <div>
        <ListGroupItem
          header={this.props.todoItem.text}
          bsStyle={
            this.props.todoItem.isDone
              ? "success"
              : this.props.todoItem.isUrgent
                ? "danger"
                : "warning"
          }
        >
          <input
            ref={this.isDoneInput}
            type="checkbox"
            checked={this.props.todoItem.isDone}
            onClick={this.handleCheckClick}
          />
          {"Due Date: " + this.props.todoItem.dueDate}

          <img
            onClick={this.handleClick}
            className={"todoList_item_delete_icon"}
            src={
              "https://visualpharm.com/assets/652/Delete-595b40b65ba036ed117d2bab.svg"
            }
          />
        </ListGroupItem>
      </div>
    );
  }
}

export default ToDoListItem;
