import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import logo from '../Images/konfio.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      data: null,
    };
    this.onLogIn = this.onLogIn.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onLogIn() {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: {
        "username": this.state.username,
        "password": this.state.password
        }
      })
        .then(response => response.json())
        .then(data => {this.setState({ data }); console.log(data)});

  }

    render() {
    return (
    <body>
    <div className="Login">
      <div className="pop">    
        <form onSubmit={this.handleSubmit}>  
        <img src={logo} alt="" className="login-logo"/>      
          <FormGroup controlId="email" className="email_label" bsSize="large">
          <i class="fas fa-envelope"></i>
            <FormControl
              autoFocus
              type="email"
              value={this.state.username}
              onChange={this.handleChange} placeholder="Mail" 
            
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <i class="fas fa-key"></i>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password" placeholder = "Password"
            />
          </FormGroup>
          <br/>
          <br/>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="btn-primary-mine"
            onClick = {this.onLogIn}
          >
            Login
          </Button>
        </form>
        </div>
    </div>
    </body>
    );
  }
}