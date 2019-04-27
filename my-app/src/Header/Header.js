import React from 'react';
import './Header.css';
import logo from '../Images/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from '../Form/Form.js'


class Header extends React.Component {
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
                            <Link to='/Form' className="btn-secondary">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to='/Form' className="btn-primary"> Solicitad tu credito </Link>
                        </li>
                    </ul>
                </div>
                </header>

                <Route path="/form" component={Form} />

            </Router>
        );
    }
}
export default Header;