import React from 'react';
import InformationCard from '../InformationCard/InformationCard.js';
import './Result.css';

class Result extends React.Component {
    render() {
        return (
            <div className="result-container">
                <InformationCard/>
                <InformationCard/>
                <InformationCard/>
                <InformationCard/>
                <InformationCard/>
            </div>
        )
    }

}

export default Result;