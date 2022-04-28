import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          {this.props.index + 1}: {this.props.text}
        </p>
        <button
          onClick={() => this.props.deleteFromTodo(this.props.index)}
          style={{ marginLeft: 20 }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
