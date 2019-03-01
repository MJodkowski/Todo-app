import React, { Component } from "react";
import TaskCard from './components/TaskCard';
import ControlButtons from './components/ControlButtons';
import "./index.css";

class App extends Component {
  state = {
    todos: []
  }
  addTodo = () => {
    this.setState({todos: this.state.todos.concat({
      id: this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 1})});
  }
  removeTodo = () => {
    this.setState({todos: this.state.todos.filter(todo => {
      return todo.id !== this.state.todos[this.state.todos.length - 1].id;
    })});
  }
  clearTodos = () => {
    this.setState({todos: []});
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return <TaskCard id={todo.id} key={todo.id}/>;
    })
    return (
      <div>
        <ControlButtons 
          add={this.addTodo} 
          remove={this.removeTodo} 
          clear={this.clearTodos} 
        />
        <div className='mt-3 h-100 d-flex flex-column align-items-center'>
          {todos}
        </div>
      </div>
    );
  }
}

export default App;
