import React from 'react';
import InformationCard from '../InformationCard/InformationCard.js';
import AcceptanceCard from '../AcceptanceCard/AcceptanceCard.js';
import './Result.css';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        console.log(this.props.location.state);
        return (
            <div className="container-result">
                <AcceptanceCard/>
                <div className="result-container">
                    <InformationCard
                    icon="far fa-thumbs-up"
                    title="Hi"
                    description="Hello there"
                    />
                    <InformationCard
                    icon="far fa-thumbs-up"
                    title="Hi"
                    description="Hello there"
                    />
                    <InformationCard
                    icon="far fa-thumbs-up"
                    title="Hi"
                    description="Hello there"
                    />
                    <InformationCard
                    icon="far fa-thumbs-up"
                    title="Hi"
                    description="Hello there"
                    />
                </div>
                <div>
                </div>
            </div>
        )
    }

}

export default Result;