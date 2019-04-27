import React from 'react';
import '../Form/Form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = { 
            personal: true,
            enterprise: false,
            credit: false,
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

    render() {
        return(
            <div className="contain-form">
                <div className="popup-form">
                    <div className="title">
                        Solicitar Credito
                        <div>
                            <ul className="nav-form">
                                <li className={`${this.state.personal ? 'active' : 'non-active'}`}>
                                
                                    Personal
                                </li>
                                <li className={`${this.state.enterprise ? 'active' : 'non-active'}`}>
                                    Empresa
                                </li>
                                <li className={`${this.state.credit ? 'active' : 'non-active'}`}>
                                    Credito
                                </li>
                            </ul>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Form;