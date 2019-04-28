import React from 'react';
import './AdminCards.css';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

class AdminCards extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {}
        }
    }
    render(){
        this.state.data = {
            labels: ["Puntos del SAT"],
            datasets: [
                {
                    label: "Puntos del SAT",
                    data: [this.props.puntosSat, 100- this.props.puntosSat],
                    backgroundColor: [
                        "rgba(138, 121, 247, 0.2)"
                    ],
                }
            ]
        }
        return(
        <div className="admin-card-container">
        <div className="style-information">
                <div className="title"><a href={this.props.domain}>{this.props.name}</a></div>
                <Pie
                    data={this.state.data}
                    height={50}
                />
            <div className="employees">
                <div >Approved </div>
                {
                    this.props.approved === 1 ? <i class="fas fa-check"></i> :<i class="fas fa-times"></i>
                }
                
                <div className="num-employees"> {
                    this.props.approved === 1 ? "Your Credit was Approved" : "Your Credit wasn't Approved"
                } </div>
            </div>
        </div>
        <div className="social-media">
            <i class="fas fa-envelope"></i>
            {this.props.correo}
            <a href = {this.props.twitter}>
                <i class="fab fa-twitter"></i>
            </a>
            <a href = {this.props.facebook}>
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href = {this.props.linkedin}>
                <i class="fab fa-linkedin"></i>
            </a>
        </div>

        </div>
        )
    }
}

AdminCards.propTypes = {
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    approved: PropTypes.number.isRequired,
    correo: PropTypes.string.isRequired,
    plazoDeseado: PropTypes.number.isRequired,
    puntosSat: PropTypes.number.isRequired,
    puntosBuro: PropTypes.number.isRequired,
    toPay: PropTypes.number.isRequired,
    ingresoMensual: PropTypes.number.isRequired,
    ingresoNeto: PropTypes.number.isRequired,
    cantidadDeseada: PropTypes.number.isRequired,
    linkedin: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
}

export default AdminCards;