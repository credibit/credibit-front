import React from 'react';
import {withRouter} from 'react-router-dom';

class CreditForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitAll() {
        const newCredit = {
            ...this.props.newCredit
        };
        if (newCredit.cantidadDeseada && newCredit.plazoDeseado && newCredit.nombreEmpresa &&
            newCredit.correo && newCredit.puntosBuro && newCredit.puntosSat && newCredit.ingresoMensual &&
            newCredit.ingresoNeto && newCredit.companySite) {
            const sendData = {
                'cantidadDeseada': parseFloat(newCredit.cantidadDeseada),
                'plazoDeseado': parseFloat(newCredit.plazoDeseado),
                'nombreEmpresa': newCredit.nombreEmpresa,
                'correo': newCredit.correo,
                'puntosBuro': parseFloat(newCredit.puntosBuro),
                'puntosSat': parseFloat(newCredit.puntosSat),
                'ingresoMensual': parseFloat(newCredit.ingresoMensual),
                'ingresoNeto': parseFloat(newCredit.ingresoNeto),
                'companySite': newCredit.companySite
            };
            fetch(`${process.env.REACT_APP_API_URL}/creditEligibility`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendData)})
                .then(response => response.json())
                .then(data => this.setState(data));
        }
        console.log(this.state.data);
        this.props.history.push({pathname: '/result',
        state: { data: this.state.data }})
    }
    render() {
        return(
            <div>
                <form className = "credit-form">
                    <div>
                        <i className="fas fa-money-bill-wave"></i>
                        <input type="number" min="0.00" max="100000000000" step="1000" placeholder="Monto Deseado" onChange={(e) => this.props.setInputValue(e, 'cantidadDeseada')}>
                        </input>
                    </div>
                    <div>
                        <i className="fas fa-calendar-alt"></i>
                        <input type="number" min="3" max="400" step="1" placeholder="Plazo deseado" onChange={(e) => this.props.setInputValue(e, 'plazoDeseado')}></input>
                    </div>
                </form>
                <button onClick={() => this.submitAll()}>Submit</button>
            </div>
        )
    }

}

export default withRouter(CreditForm);