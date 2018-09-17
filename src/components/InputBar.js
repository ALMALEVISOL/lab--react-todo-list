import React, { Component } from "react";

class InputBar extends Component {
  addInput = React.createRef();
  addBarDate = React.createRef();
  isUrgent = React.createRef();

  handleClick = event => {
    let inputValue = this.addInput.current.value;
    if (inputValue === "") return;
    let dueDate = this.addBarDate.current.value;
    let isUrgent = this.isUrgent.current.checked;

    this.addInput.current.value = "";
    this.addBarDate.current.value = "";
    this.isUrgent.current.checked = false;
    let newToDoItemObject = {
      id: Date.now(),
      text: inputValue,
      isUrgent: isUrgent,
      dueDate: dueDate,
      isDone: false
    };
    this.props.onAddButtonClick(newToDoItemObject);
  };

  render() {
    return (
      <div className={"addBar"}>
        <input
          ref={this.addInput}
          onChange={this.handleChange}
          className={"add_input"}
        />
        <input
          ref={this.addBarDate}
          type="date"
          className={"addBar_input_date"}
        />
        <input
          ref={this.isUrgent}
          type="checkbox"
          className={"addBar_input_checkbox"}
        />
        Urgent?
        <br />
        <button onClick={this.handleClick} className={"add_button"}>
          Agregar TODO
        </button>
      </div>
    );
  }
}

export default InputBar;
