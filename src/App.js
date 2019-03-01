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
    this.setState({todos: this.state.todos.slice(0, -1)});
  }
  clearTodos = () => {
    this.setState({todos: []});
  }
  render() {
    return (
      <div>
        <ControlButtons 
          add={this.addTodo} 
          remove={this.removeTodo} 
          clear={this.clearTodos} 
        />
        <div className='mt-3 h-100 d-flex flex-column align-items-center'>
          {this.state.todos.map(todo => <TaskCard id={todo.id} key={todo.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;