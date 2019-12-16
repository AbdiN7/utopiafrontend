import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const TicketElement = (props) => {
    return(
        <Card className="cardClass">
            <Grid container spacing={0} alignItems="center">
                <Grid item xs={5}>
                    <Typography className="typogClass">
                        AAA&nbsp;&rarr;&nbsp;BBB
                        {/* {props.values.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{props.values.flightPath.destAirport.airportCode} */}
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                        UTA 400
                        {/* UTA {props.values.flightId} */}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                {/* onClick={() => props.selectButtonClicked(props.values, cost)} */}
                    <Button  className="formButtons">
                        REFUND
                    </Button>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                        hh:mm:ss&nbsp;&rarr;&nbsp;hh:mm:ss
                    {/* {props.values.departureTime}&nbsp;&rarr;&nbsp;{props.values.arrivalTime} */}
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                        Mon Dec 16 2019
                        {/* {props.ticketDate.toDateString()} */}
                        {/* {Math.abs(((new Date(ticket.flight.arrivalTime).getTime() - new Date(ticket.flight.departureTime).getTime())/ (1000 * 60 * 60)).toFixed(1))} Hours */}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography className="typogClass">
                        $100.00
                        {/* {cost} */}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default TicketElement;