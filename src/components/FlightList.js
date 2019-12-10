import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import FlightListElement from './FlightListElement';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getFlightsByAirports} from '../actions/bookingActions';
import axios from 'axios';

class FlightList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedFlightChild: {},
        }

        this.selectButtonClicked = this.selectButtonClicked.bind(this);
    }

    selectButtonClicked(flight, cost){
        this.props.handleFlightChange(flight, cost);
        this.props.nextStep();
    }

    // componentDidMount(){
    //     axios.get(`https://ma35v84odj.execute-api.us-east-2.amazonaws.com/dev/flight/${this.props.values.srcAirport}/to/${this.props.values.destAirport}`)
    //     .then((resolve) => {
    //         console.log(resolve.data);
    //         this.setState({flights: resolve.data});
    //     })
    //     .catch((reject) => {
    //         console.log("REJECTED: \n" + reject )
    //     });
    // }

    componentDidMount(){
        this.props.getFlightsByAirports(this.props.values.srcAirport, this.props.values.destAirport);
    }

    render(){
        return(
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Button onClick={this.props.prevStep} className="formButtons">
                            Prev
                        </Button>
                    </Grid>
        
                    <Grid item xs ={6}/>
                    <Grid item xs={3}/>
                </Grid>

                <Grid item xs = {12}>
                    {this.props.flights.map((flight) =>
                        <FlightListElement
                            key={flight.flightId.toString()}
                            values={flight}
                            ticketDate={this.props.values.ticketDate}
                            selectButtonClicked={this.selectButtonClicked}
                        />
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}

FlightList.propTypes = {
    getFlightsByAirports: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    flights: state.booking.flights
});

export default connect(mapStateToProps, { getFlightsByAirports })(FlightList);
