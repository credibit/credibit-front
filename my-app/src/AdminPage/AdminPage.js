import React from 'react';
import './AdminPage.css';
import AdminCards from '../AdminCards/AdminCards.js';

class AdminPage extends React.Component{
    constructor() {
        super();
        this.state = {
            data: null,
        }
    }

    componentWillMount(){

        fetch(`${process.env.REACT_APP_API_URL}/creditRequests`)
        .then(response => response.json())
        .then(data => {this.setState({ data }); console.log(data)});
    }
    render(){
        console.log(this.state.data);
        return (
        <div className="admin-container">
            {
                this.state.data === null ? <div></div> :
                this.state.data.creditRequests.map(function(item, i){
                    return (
                        <AdminCards
                            name= {item.nombreEmpresa}
                            domain = {item.companySite}
                            approved = {item.approved}
                            correo = {item.correo}
                            plazoDeseado = {item.plazoDeseado}
                            puntosSat = {item.puntosSat}
                            puntosBuro = {item.puntosBuro}
                            toPay = {item.toPay}
                            ingresoMensual = {item.ingresoMensual}
                            ingresoNeto = {item.ingresoNeto}
                            cantidadDeseada = {item.cantidadDeseada}
                            linkedin = {item.linkedin}
                            facebook = {item.facebook}
                            twitter = {item.twitter}
                            />
                        )
                  })
            }
        </div>
        )
    }

}

export default AdminPage;