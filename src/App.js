import React from "react";
import logo from "./logo.svg";
import TodoInput from "./TodoInput";
import "./App.css";
import TodoList from "./Todolist";
//ES
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
  }

  addToTodo = (text) => {
    //concat method returns a new array, it adds the text to the end of the array
    this.setState({ todo: this.state.todo.concat(text) });
  };

  deleteFromTodo = (index) => {
    //react state is immutable!
    let copyTodo = [...this.state.todo];
    //array.splice(startIndex,deleteCount)
    copyTodo.splice(index, 1);
    this.setState({ todo: copyTodo });
  };

  render() {
    return (
      <div className="App">
        <TodoInput addToTodo={this.addToTodo} />
        <TodoList todo={this.state.todo} deleteFromTodo={this.deleteFromTodo} />
      </div>
    );
  }
}

export default App;
