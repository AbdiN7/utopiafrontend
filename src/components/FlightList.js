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
        console.log("airports: " + this.props.srcAirport + " " + this.props.destAirport)
        axios.get(`https://w1714otaj1.execute-api.us-east-1.amazonaws.com/dev/flight/${this.props.srcAirport}/to/${this.props.destAirport}`)
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
                    {this.state.flights.map((flight) =>
                        <Grid item xs = {12}>
                            <FlightListElement
                                key={flight.flightId.toString()}
                                value={flight}
                                nextStep={this.props.nextStep}
                                handleChange={this.handleChange}
                            />
                        </Grid>
                    )}
            </React.Fragment>
        );
    }
}