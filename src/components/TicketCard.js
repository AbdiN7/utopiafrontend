import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';

export default function TicketCard(props){
    console.log("12342315");
    console.log(props);
    return(
        <div>
            <Card className='paymentForm'>
                <CardContent>
                    <Typography variant='h6'>
                        Ticket {}
                    </Typography>
                        <Grid  className='ticketList' container space={3}>
                            <Grid container space={12}>
                                <Grid>
                                    Ticket ID Number:
                                </Grid>
                                <Grid item xs={3}>
                                    <p>{props.ticket.ticketId}</p>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                            <Grid>
                                Flight Information:
                            </Grid>
                            <Grid className='ticketList' container space={12}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                <p>Flight Number: </p>
                                </Grid>
                                <Grid item xs={4}>
                                <p>{props.ticket.flight.flightId}</p>
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                <p>Arrival Time: </p>
                                </Grid>
                                <Grid item xs={4}>
                                <p>{props.ticket.flight.arrivalTime}</p>
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                <p>Departure Time: </p>
                                </Grid>
                                <Grid item xs={4}>
                                <p>{props.ticket.flight.departureTime}</p>
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                <p>Departing From: </p>
                                </Grid>
                                <Grid item xs={4}>
                                <p>{props.ticket.flight.flightPath.srcAirport.airportName}</p>
                                </Grid>
                                <Grid item xs={3}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={4}>
                                <p>Arriving At: </p>
                                </Grid>
                                <Grid item xs={4}>
                                <p>{props.ticket.flight.flightPath.destAirport.airportName}</p>
                                </Grid>
                                <Grid item xs={3}></Grid>
                            </Grid>
                            <Grid container space={12}>
                                <Grid>
                                    Booking Number:
                                </Grid>
                                <Grid className='ticketListRight' item xs={3}>
                                    <p>{props.ticket.booking.bookingId}</p>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                            <Grid container space={12}>
                                <Grid>
                                    Ticket Cost:
                                </Grid>
                                <Grid className='ticketListRight' item xs={4}>
                                    <p>{props.ticket.cost}</p>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                            <Grid container space={12}>
                                <Grid>
                                    Flight Date:
                                </Grid>
                                <Grid className='ticketListRight' item xs={4}>
                                    <p>{props.ticket.ticketDate}</p>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
        </div>
    )
}