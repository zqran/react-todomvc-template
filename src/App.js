/* 
  htmlFor
  autoFocus
  defaultChecked
  defaultValue
*/

import React, { Component } from 'react'

// 导入todos样式
import './css/todos-base.css'
import './css/todos-index.css'

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {/* editing */}
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" defaultChecked />
                <label>Taste JavaScript</label>
                <button className="destroy" />
              </div>
              <input
                className="edit"
                defaultValue="Create a TodoMVC template"
              />
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Buy a unicorn</label>
                <button className="destroy" />
              </div>
              <input className="edit" defaultValue="Rule the web" />
            </li>
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    )
  }
}

export default App
