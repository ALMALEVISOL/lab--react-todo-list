import React, { Component } from "react";

class NavTabs extends Component {
  handleClick = event => {
    let customAttr = event.currentTarget.getAttribute("data-ptype");
    this.props.onSelectOption(customAttr);
  };

  render() {
    let allClass = this.props.optionSelected === "all" ? "active" : "";
    let doneClass = this.props.optionSelected === "done" ? "active" : "";
    let pendingClass = this.props.optionSelected === "pending" ? "active" : "";
    return (
      <div className={"nav_tabs_container"}>
        <div
          data-ptype={"all"}
          onClick={this.handleClick}
          className={`nav_item  ${allClass}`}
        >
          TODOS
        </div>
        <div
          data-ptype={"done"}
          onClick={this.handleClick}
          className={`nav_item  ${doneClass}`}
        >
          TERMINADOS
        </div>
        <div
          data-ptype={"pending"}
          onClick={this.handleClick}
          className={`nav_item  ${pendingClass}`}
        >
          PENDIENTES
        </div>
      </div>
    );
  }
}

export default NavTabs;
