import React from 'react';
import './InformationCard.css';
class InformationCard extends React.Component {
    render() {
        return (
            <div className="card-container">
                <i class="far fa-thumbs-up"></i>
                <div className="title">HELLO THERE</div>
                <div className="description">HI LOVE</div>
            </div>
        )
    }

}

export default InformationCard;