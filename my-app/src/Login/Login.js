import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import logo from '../Images/konfio.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.onLogIn = this.onLogIn.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleUsernameChange = event => {
    this.setState({
      'username': event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      'password': event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onLogIn() {
    this.props.hideCredit();
    this.props.history.push('/admin');
  }

    render() {
    return (
    <div className="Login">
      <div className="pop">    
        <form onSubmit={this.handleSubmit}>  
        <img src={logo} alt="" className="login-logo"/>      
          <FormGroup controlId="email" className="email_label">
          <i className="fas fa-envelope"></i>
            <FormControl
              autoFocus
              type="email"
              value={this.state.username}
              onChange={this.handleUsernameChange} placeholder="Mail" 
            
            />
          </FormGroup>
          <FormGroup controlId="password">
          <i className="fas fa-key"></i>
            <FormControl
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password" placeholder = "Password"
            />
          </FormGroup>
          <br/>
          <br/>
          <Button
            block
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
    );
  }
}

export default Login;