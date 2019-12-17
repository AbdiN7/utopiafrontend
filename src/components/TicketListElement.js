import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const TicketListElement = (props) => {

    const ticket = 
    {
        "ticketId": 280,
        "cost": 167.75,
        "ticketDate": "2019-12-20",
        "flight": {
            "flightId": 4,
            "plane": "747",
            "arrivalTime": "10:00:00",
            "departureTime": "06:00:00",
            "totalSeats": 84,
            "flightPath": {
                "flightPathId": 4,
                "srcAirport": {
                    "airportCode": "DDD",
                    "airportName": "name4",
                    "city": "city4",
                    "zip": 0
                },
                "destAirport": {
                    "airportCode": "CCC",
                    "airportName": "name3",
                    "city": "city3",
                    "zip": 0
                }
            }
        },
        "booking": {
            "bookingId": 127,
            "isPaid": 0,
            "bookDate": "2019-12-13T21:06:12.000Z",
            "user": {
                "userId": 21,
                "userFirstName": "nicc",
                "userLastName": "vass",
                "address": "4123 guest ST Seoul",
                "phone": "235345",
                "email": "nicc@email.com"
            }
        }
    }

    return(
        <Card className="cardClass">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={4}>
                    <Typography className="typogClass">
                        # {ticket.ticketId}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                        UTA {ticket.flight.flightId}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                        ${ticket.cost}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                        
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Typography className="typogClass">
                    {ticket.flight.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{ticket.flight.flightPath.destAirport.airportCode}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography className="typogClass">
                        {new Date(ticket.ticketDate).toDateString()}, {ticket.flight.departureTime}&nbsp;&rarr;&nbsp;{ticket.flight.arrivalTime}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default TicketListElement