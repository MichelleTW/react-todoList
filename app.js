import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // 建構子，每個 class 第一次產生時都會執行到這邊
  constructor (props) {
    super(props);

    // 這一行有點難解釋，想深入研究的麻煩自己查資料
    // 
    this.onClick = this.onClick.bind(this);

    // 設定 state
    this.state = {
      todos: [
        {id: 1, name: 'hello', completed: false},
        {id: 2, name: 'aaaaaa', completed: true},
        {id: 3, name: 'world', completed: false}
      ]
    }
  }

  onClick() {

    // 亂數隨機產生一個 id
    var newId = Math.floor(Math.random()*500);

    // 設定 state
    this.setState({

      // ES6 語法，就等於是把 todos 新增一個 item
      todos: [
        ...this.state.todos,
        {id: newId, name: '我是' + newId, completed: false}
      ]
    })
  }

  render() {

    // 從 state 取出資料
    let todos = this.state.todos;

    return (
      <div>
        <button onClick={this.onClick}>Add item</button>
        <ul>
          {render() {

    // 從 state 取出資料
    let todos = this.state.todos;

    return (
      <div>
        <button onClick={this.onClick}>Add item</button>
        <ul>
          {
            todos.map((todo) => (<Todo name={todo.name} completed={todo.completed} />))
          }
        </ul>
      </div>
    );
  }
}

export default App;
/*  Todo.js */
import React, { Component } from 'react';

export default class Todo extends Component {

  render() {
    const {name, completed} = this.props;
    return (
      <li>
        name:{name}, {completed ? '已完成~' : ''}
      </li>
    );
  }
}

