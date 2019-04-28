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
                        <input type="text" placeholder="Correo">
                        </input>
                    </div>
                </form>
            </div>
        )
    }

}

export default EnterpriseForm;