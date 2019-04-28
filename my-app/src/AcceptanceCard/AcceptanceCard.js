import React from 'react';
import './AcceptanceCard.css';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

class AcceptanceCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Payment Reduction",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            "rgba(138, 121, 247, 0.2)"
                        ],
                        borderColor: ["rgba(138, 121, 247, 1)"],
                    }
                ]
            }
        }
    }
    render() {
        this.state.data.labels=  this.props.label;
        console.log(this.state.data.labels);
        return(
        <div className="acceptance-container">
            <div className="title">
            HELLO there
            </div>
            <div className="chart">
                <Line
                    data={this.state.data}
                    height={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </div>
        
        )
    }

}

AcceptanceCard.propTypes = {
    label: PropTypes.array.isRequired,
}

export default AcceptanceCard;