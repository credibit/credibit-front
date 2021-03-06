import React from 'react';
import '../Form/Form.css';
import PersonalForm from '../PersonalForm/PersonalForm';
import EnterpriseForm from '../EnterpriseForm/EnterpriseForm';
import CreditForm from '../CreditForm/CreditForm';

class Form extends React.Component {
    constructor() {
        super();
        this.state = { 
            personal: false,
            enterprise: true,
            credit: false,
            active: '',
            newCredit: {
                nombreEmpresa: '',
                correo: '',
                puntosBuro: '',
                puntosSat: '',
                ingresoMensual: '',
                ingresoNeto: '',
                cantidadDeseada: '',
                plazoDeseado: '',
                companySite: ''
            }
        }
    }

    handlePersonalClick = () => {
        this.setState({
          personal: true,
          enterprise: false,
          credit: false
        })
    }

    handleEnterpriseClick = () => {
        this.setState({
          personal: false,
          enterprise: true,
          credit: false
        })
    }

    handleCreditClick = () => {
        this.setState({
            personal: false,
            enterprise: false,
            credit: true
        })
    }

    setInputValue = (e, name) => {
        const newVal = e.target.value;
        this.setState({
            newCredit: {
                ...this.state.newCredit,
                [name]: newVal
            }
        });
    }

    render() {
        var active = this.state.personal === true ? 'personal' : this.state.enterprise === true ? 'enterprise' : 'credit';
        return(
            <div className="contain-form">
                <div className="popup-form">
                    <div className="title">
                        Solicitar Credito
                        <div className="forms-align">
                            <ul className="nav-form">
                                {/* <li onClick = {this.handlePersonalClick} className={`${this.state.personal ? 'active' : 'non-active'}`}>
                                    Personal
                                </li> */}
                                <li onClick = {this.handleEnterpriseClick} className={`${this.state.enterprise ? 'active' : 'non-active'}`}>
                                    Empresa
                                </li>
                                <li onClick = {this.handleCreditClick} className={`${this.state.credit ? 'active' : 'non-active'}`}>
                                    Credito
                                    
                                </li>
                            </ul>
                        <div/>

                        <div>
                            {active === 'personal' ? (
                                <PersonalForm />
                            ) : active === 'enterprise' ? (
                                <EnterpriseForm setInputValue={(e, name) => this.setInputValue(e, name)}/>
                            ) : active === 'credit' ? (
                                <CreditForm newCredit={this.state.newCredit} setInputValue={(e, name) => this.setInputValue(e, name)}/>
                            ) : null}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Form;