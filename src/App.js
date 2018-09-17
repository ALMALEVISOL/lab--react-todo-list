import React, { Component } from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ToDoList from "./components/ToDoList";
import NavTabs from "./components/NavTabs";
import "./App.css";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        text: "Revisar la información de mi título",
        isUrgent: false,
        dueDate: "2018-01-01",
        isDone: false
      },
      {
        id: 2,
        text: "Llevar a mi perro a la veterinaria",
        isUrgent: true,
        dueDate: "2018-01-05",
        isDone: false
      }
    ],
    optionSelected: "all"
  };

  onAddButtonClick = newTodoItem => {
    let newToDoList = [...this.state.todoList, newTodoItem];
    this.setState({
      todoList: newToDoList
    });
  };

  onDeleteToDoItem = id => {
    const nextAllToDoItems = this.state.todoList.filter(
      toDoItem => toDoItem.id !== id
    );
    this.setState({
      todoList: nextAllToDoItems
    });
  };

  onSelectOption = option => {
    this.setState({
      optionSelected: option
    });
  };

  onToDoItemModified = todoItemModified => {
    let newTodoItemList = [...this.state.todoList];
    var objectIndex = this.state.todoList.findIndex(todoItem => {
      return todoItem === todoItemModified;
    });
    newTodoItemList[objectIndex] = todoItemModified;
    this.setState({
      todoList: newTodoItemList
    });
  };

  render() {
    let todoItems = [];
    if (this.state.optionSelected === "all") {
      todoItems = this.state.todoList;
    } else if (this.state.optionSelected === "done") {
      todoItems = this.state.todoList.filter(todoItem => {
        return todoItem.isDone;
      });
    } else {
      todoItems = this.state.todoList.filter(todoItem => {
        return !todoItem.isDone;
      });
    }
    return (
      <div className="App">
        <Header />
        <InputBar onAddButtonClick={this.onAddButtonClick} />
        <NavTabs
          onSelectOption={this.onSelectOption}
          optionSelected={this.state.optionSelected}
        />
        <ToDoList
          todoList={todoItems}
          onDeleteToDoItem={this.onDeleteToDoItem}
          onToDoItemModified={this.onToDoItemModified}
        />
      </div>
    );
  }
}

export default App;
