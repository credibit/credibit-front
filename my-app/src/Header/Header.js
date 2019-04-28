import React from 'react';
import './Header.css';
import logo from '../Images/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from '../Form/Form.js';
import Login from  '../Login/Login.js';
import Result from '../Result/Result.js';
import AdminPage from '../AdminPage/AdminPage.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCredit: true
        }
    }

    hideCredit() {
        this.setState({
            showCredit: false
        });
    }

    render(){
        return (
            <Router>
            <header className="header-style">
                <nav className = "navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header-wp">
                            <div className="navbar-header">
                                <div id="logo-image">
                                    <img 
                                    alt=''
                                    className="logo-image"
                                    src={logo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="menu-content">
                    <ul className="menu-navigation">
                        <li>
                            <Link to='/login' className="btn-secondary-mine">Iniciar sesión como admin</Link>
                        </li>
                        <li>
                            {(this.state.showCredit)? <Link to='/form' className="btn-primary-mine"> Solicitad tu credito </Link>: <div></div> }
                            
                        </li>
                    </ul>
                </div>
                </header>

                <Route path="/form" component={Form} />
                <Route path="/login" component={(props) => {
                    return (
                        <Login history={props.history} hideCredit={() => this.hideCredit()}/>
                    )
                }} />
                <Route path="/result" component={Result}/>
                <Route path="/admin" component={AdminPage}/>

            </Router>
        );
    }
}
export default Header;