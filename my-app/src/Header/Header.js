import React from 'react';
import './Header.css';
import logo from '../Images/logo.png'

class Header extends React.Component {
    render(){
        return (
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
                            <a className="btn-primary" href=""> Solicitad tu credito </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default Header;