import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const FlightListElement = (props) => {

    return(
        <React.Fragment>
            <Card className="cardClass">
                <Grid container spacing={0} alignItems="center">
                    <Grid item xs={5}>
                        <Typography className="typogClass">
                            {props.value.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{props.value.flightPath.destAirport.airportCode}
                        </Typography>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography className="typogClass">
                            UTA {props.value.flightId}
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Button onClick={props.nextStep} className="formButtons">
                            SELECT
                        </Button>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography className="typogClass">
                        {props.value.departureTime}&nbsp;&rarr;&nbsp;{props.value.arrivalTime}
                        </Typography>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography className="typogClass">
                            DATE
                            {/* {Math.abs(((new Date(ticket.flight.arrivalTime).getTime() - new Date(ticket.flight.departureTime).getTime())/ (1000 * 60 * 60)).toFixed(1))} Hours */}
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography className="typogClass">${(Math.random() * 200 + 50).toFixed(2)}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </React.Fragment>

    );
}

export default FlightListElement