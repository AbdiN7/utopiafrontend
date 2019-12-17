import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const TicketListElement = (props) => {

    return(
        <Card className="cardClass">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={4}>
                    <Typography className="typogClass">
                        # {props.ticket.ticketId}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                        UTA {props.ticket.flight.flightId}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                        ${props.ticket.cost}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                    {props.ticket.flight.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{props.ticket.flight.flightPath.destAirport.airportCode}
                    </Typography>
                </Grid>

                <Grid item xs={8}>
                    <Typography className="typogClass">
                        {new Date(props.ticket.ticketDate).toDateString()}, {props.ticket.flight.departureTime}&nbsp;&rarr;&nbsp;{props.ticket.flight.arrivalTime}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default TicketListElement