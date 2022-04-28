import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todo.map((item, index) => {
          return (
            <TodoItem
              key={index}
              deleteFromTodo={this.props.deleteFromTodo}
              text={item}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
