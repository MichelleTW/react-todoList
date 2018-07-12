import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // 建構子，每個 class 第一次產生時都會執行到這邊
  constructor (props) {
    super(props);

    // 設定 state
    this.state = {
      todos: [
        {id: 1, name: 'hello', completed: false},
        {id: 2, name: 'aaaaaa', completed: true},
        {id: 3, name: 'world', completed: false}
      ]
    }
  }
  render() {

    // 從 state 取出資料
    let todos = this.state.todos;

    return (
      <div>
        <ul>
          {
            todos.map((todo) => {

              // 傳回 jsx
              return (
                <li>
                  name:{todo.name}, {todo.completed ? '已完成' : ''}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
