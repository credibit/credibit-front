import React from 'react';
import '../EnterpriseForm/EnterpriseForm.css';
class EnterpriseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        
        return(
            <div>
                <form className = "enterprise-form">
                    <div>
                        <i className="fas fa-globe-americas"></i>
                        <input type="text" placeholder="Enterprise Name" onChange={(e) => this.props.setInputValue(e, 'nombreEmpresa')}>
                        </input>
                    </div>
                    <div>
                        <i className="fas fa-link"></i>
                        <input type="url" placeholder="Url de la empresa" onChange={(e) => this.props.setInputValue(e, 'companySite')}>
                        </input>
                    </div>
                    <div>
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Correo" onChange={(e) => this.props.setInputValue(e, 'correo')}>
                        </input>
                    </div>
                    <div>
                        <i className="fas fa-dot-circle"></i>
                        <input type="number" step="1" min="0" max="100" placeholder="Puntos Buró" onChange={(e) => this.props.setInputValue(e, 'puntosBuro')}>
                        </input>
                    </div>         
                    <div>
                        <i className="fas fa-dot-circle"></i>
                        <input type="number" step="1" min="0" max="100000000" placeholder="Ingreso Mensual" onChange={(e) => this.props.setInputValue(e, 'ingresoMensual')}>
                        </input>
                    </div>
                    <div>
                        <i className="fas fa-bacon"></i>
                        <input type="number" step="1" min="0" max="10000000000" placeholder="Ingreso Neto" onChange={(e) => this.props.setInputValue(e, 'ingresoNeto')}>
                        </input>
                    </div>             
                    
                    <div>
                        <i className="fas fa-building none-border"></i>
                        <input type="number" step="1" min="0" max="100" placeholder="Puntos SAT" onChange={(e) => this.props.setInputValue(e, 'puntosSat')}>
                        </input>
                    </div>
                </form>

            </div>
            
        )
    }

}

export default EnterpriseForm;