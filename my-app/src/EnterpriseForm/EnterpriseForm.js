import React from 'react';
import '../EnterpriseForm/EnterpriseForm';

class EnterpriseForm extends React.Component{
    render() {
        return(
            <div>
                <form className = "enterprise-form">
                    <div>
                        <i class="fas fa-globe-americas"></i>
                        <input type="text" placeholder="Enterprise Name">
                        </input>
                    </div>
                    <div>
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Correo">
                        </input>
                    </div>
                    <div>
                        <i class="fas fa-dot-circle"></i>
                        <input type="number" step="1" min="0" max="100" placeholder="Puntos Buró">
                        </input>
                    </div>
                    <div>
                        <i class="fas fa-building"></i>
                        <input type="number" step="1" min="0" max="100" placeholder="Puntos SAT">
                        </input>
                    </div>
                </form>
            </div>
            
        )
    }

}

export default EnterpriseForm;