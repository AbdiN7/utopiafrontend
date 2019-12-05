import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import FlightListElement from './FlightListElement';
import axios from 'axios';

export default class FlightList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flights: []
        }
    }

    componentDidMount(){
        axios.get(`https://awkx15u5u0.execute-api.us-east-1.amazonaws.com/dev/flight/${this.props.values.srcAirport}/to/${this.props.values.destAirport}`)
        .then((resolve) => {
            console.log(resolve.data);
            this.setState({flights: resolve.data});
        })
        .catch((reject) => {
            console.log("REJECTED: \n" + reject )
        });
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
                    {this.state.flights.map((flight) =>
                        <FlightListElement
                            key={flight.flightId.toString()}
                            values={flight}
                            ticketDate={this.props.values.ticketDate}
                            nextStep={this.props.nextStep}
                            handleChange={this.handleChange}
                        />
                    )}
                </Grid>
            </React.Fragment>
        );
    }
}