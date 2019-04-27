import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return (
            <header>
                <nav className = "navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header-wp">
                            <div className="navbar-header">
                                <div id="logo-image" className="p-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQldYYzl9Z4y5Q1vDezF1y4ARQdzbvTC5zb0Jgg-WPJ9ijsDugx"/>
                                    <Button>Hello</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;