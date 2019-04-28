import React from 'react';
import InformationCard from '../InformationCard/InformationCard.js';
import AcceptanceCard from '../AcceptanceCard/AcceptanceCard.js';
import './Result.css';

class Result extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {
                creditRequests: [
                    {
                        toPay: 20,
                        ingresoMensual: 20,
                        ingresoNeto: 20,
                        nombreEmpresa: "",
                    }
                ]
            },
            labels: [],
        }
    }

    componentWillMount(){

        fetch(`${process.env.REACT_APP_API_URL}/creditRequests`)
        .then(response => response.json())
        .then(data => {this.setState({ data }); console.log(data.creditRequests[0])});
    }

    render() {
        console.log(this.props.location.state);
        return (
            <div className="container-result">
                <AcceptanceCard
                label = {[42]}
                />
                <div className="result-container">
                    <InformationCard
                    icon="fas fa-building"
                    title="Nombre Empresa"
                    description={this.state.data.creditRequests[this.state.data.creditRequests.length-1]['nombreEmpresa']}
                    />
                    <InformationCard
                    icon="fas fa-wallet"
                    title='Ingreso Neto'
                    description={this.state.data.creditRequests[this.state.data.creditRequests.length-1]['ingresoNeto']}
                    />
                    <InformationCard
                    icon="fas fa-money-bill-alt"
                    title="ingresoMensual"
                    description={this.state.data.creditRequests[this.state.data.creditRequests.length-1]['ingresoMensual']}
                    />
                    <InformationCard
                    icon="fas fa-credit-card"
                    title="To Pay"
                    description={this.state.data.creditRequests[0]['toPay']}
                    />
                </div>
                <div>
                </div>
            </div>
        )
    }

}

export default Result;