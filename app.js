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
/*  Todo.js
 5-todo.js內‘‘設已完成&刪除’’：子元件改上層資料的 state（by  props ）   */
import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {

  // 建構子，每個 class 第一次產生時都會執行到這邊
  constructor (props) {
    super(props);

    // 這一行有點難解釋，想深入研究的麻煩自己查資料
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    // 設定 state
    this.state = {
      todos: [
        {id: 1, name: 'hello', completed: false},
        {id: 2, name: 'aaaaaa', completed: true},
        {id: 3, name: 'world', completed: false}
      ]
    }
  }

  // input 改變，設定 value
  onChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  onClick () {

    const {todos, text} = this.state;
    const newId = todos[todos.length - 1].id + 1;

    // 設定 state
    this.setState({
      text: '',
      todos: [
        ...todos,
        {id: newId, name: text, completed: false}
      ]
    })
  }

  removeTodo (id) {
    const {todos} = this.state;

    // 直接用 filter 來把資料砍掉
    let newTodos = todos.filter((item) => item.id !== id);

    this.setState({
      todos: newTodos // 這個為什麼不寫成 todos: newTodos 呢?
    })
  }

  setCompleted (id) {
    const {todos} = this.state;

    // 直接用 map 來找到要更改的資料，其他不變
    let newTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    })

    this.setState({
      todos: newTodos
    })
  }

  render () {

    // 從 state 取出資料
    const {todos, text} = this.state;

    return (
      <div>
        <div>
          <input name="name" type="text" value={text} onChange={this.onChange} />
        </div>
        <button onClick={this.onClick}>Add item</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>名稱</th>
              <th>狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
          {
            todos.map((todo) => (
              <Todo id={todo.id} name={todo.name} completed={todo.completed} 
                remove={this.removeTodo} setCompleted={this.setCompleted}/>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
