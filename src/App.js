import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
// import Navigation from './components/Navigation'


import { todos } from './todos.json'
console.log(todos)

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
      console.log(index)
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>
                {todo.title}
              </h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioriry}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TodoForm  
                onAddTodo={this.handleAddTodo}
              />
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
              <img src={logo} className="App-logo" alt="logo" />
      </div>
    )

  }
}

export default App;
