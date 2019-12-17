import React from 'react';
import { Grid, Button } from '@material-ui/core';
import FlightListElement from './FlightListElement';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getFlightsByAirports} from '../actions/bookingActions';
import CircularProgress from '@material-ui/core/CircularProgress';

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

    componentDidMount(){
        this.props.getFlightsByAirports(this.props.values.srcAirport, this.props.values.destAirport);
    }

    render(){
        if(this.props.isPending){
            return(
                <div>
                    <h1>Loading Flights</h1>
                    <CircularProgress className='spinner'/>
                </div>
            )
        }
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
    getFlightsByAirports: PropTypes.func.isRequired,
    isPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    flights: state.booking.flights,
    isPending: state.booking.isPending
});

export default connect(mapStateToProps, { getFlightsByAirports })(FlightList);
