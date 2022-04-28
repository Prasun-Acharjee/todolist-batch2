import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleClick = () => {
    if (this.state.text.trim().length > 0) {
      this.props.addToTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Write your next task here..."
          onChange={this.handleChange}
          value={this.state.text}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default TodoInput;
