import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
    this.handleUserName = this.handleUserName.bind(this);
    //handlePw didn't need to be bound because we passed it in as a function in jsx
    //this.handlePw = this.handlePw.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  handleUserName(event) {
    this.setState({ username: event.target.value })
  }

  handlePw(event) {
    this.setState({ password: event.target.value })
  }

  login() {
    //create user object with username and password
console.log('running')
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    /* this is the shorthand way of doing this

         const {username, password} = this.state;
         const user = {
           username,
           password
          }

          */
    //axios post that object to the server
    axios.post(`api/login`, user)
          .then(res => {
            console.log(res.data);
          })
    // axios.get('/api/health-check')
    //       .then(res => {
    //         console.log(res)
    //       })

  }
  

  register() {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
  }

  render() {
    return <div className="App">
      <h3> login app </h3>
      <div className="input-container">
        <label>username</label>
        <input type="text" placeholder="username" onChange={this.handleUserName} />
      </div>
      <div className="input-container">
        <label>password</label>
        <input type="password" placeholder="password" onChange={(e) => this.handlePw(e)} />
      </div>
      <div className="button-container">
        <button onClick={this.login}> login </button> <button onClick={this.register}> register </button>
      </div>
    </div>;
  }
}

export default App;
