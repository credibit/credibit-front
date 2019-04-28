import React from 'react';

class CreditForm extends React.Component{
    render() {
        return(
            <div>
                <form className = "credit-form">
                    <div>
                        <i class="fas fa-money-bill-wave"></i>
                        <input type="text" placeholder="Monto Deseado">
                        </input>
                    </div>
                    <div>
                        <i class="fas fa-calendar-alt"></i>
                        <input type="text" placeholder="Plazo Deseado">
                        </input>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreditForm;