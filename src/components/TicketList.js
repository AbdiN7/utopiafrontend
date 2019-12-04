import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function TicketList(props){
    console.log("12342315");
    console.log(props.ticket);
    return(
        <div>
            <Card className='paymentForm'>
                <CardContent>
                    <Typography variant='h6'>
                        Ticket {}
                    </Typography>
                        <Grid container space={3}>
                            <Grid item xs={4}>
                                Ticket ID Number:
                            </Grid>
                            <Grid item xs={6}>
                                <p>{props.ticket.ticketId}</p>
                            </Grid>
                            <Grid item xs={4}>
                                Flight Number:
                            </Grid>
                            <Grid item xs={6}>
                                <p>{props.ticket.flightId}</p>
                            </Grid>
                            <Grid item xs={4}>
                                Booking Number:
                            </Grid>
                            <Grid item xs={6}>
                                <p>{props.ticket.bookingId}</p>
                            </Grid>
                            <Grid item xs={4}>
                                Cost:
                            </Grid>
                            <Grid item xs={6}>
                                <p>{props.ticket.cost}</p>
                            </Grid>
                            <Grid item xs={4}>
                                Flight Date:
                            </Grid>
                            <Grid item xs={6}>
                                <p>{props.ticket.ticketDate}</p>
                            </Grid>
                        </Grid>
                </CardContent>
            </Card>
        </div>
    )
}