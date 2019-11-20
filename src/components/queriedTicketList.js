"use strict"

import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

const queriedTicketList = (props) => {

    let ticket = {
        "cost": "564.50",
        "flight":{
            "flightId": "404",
            "plane": "Boeing 737",
            "departureTime": "2019-11-20T8:15:70",
            "arrivalTime": "2019-11-20T10:33:18",
            "totalSeats":"350",
            "flightPath":{
                "srcAirport":{
                    "airportId": "1",
                    "airportName": "Laguardia",
                    "airportCode": "LGA",
                    "city": "NYC",
                    "zip": "64291"
                },
                "destAirport":{
                    "airportId": 2,
                    "airportName": "John F. Kennedy",
                    "airportCode": "JFK",
                    "city": "NYC",
                    "zip": "01854"
                }
            }
        }
    }

    const loggit = () =>{console.log("NEXT STEP")}

    return(
        <Card className="cardClass">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={5}>
                    <Typography className="typogClass">
                        {ticket.flight.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{ticket.flight.flightPath.destAirport.airportCode}
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                        UTA {ticket.flight.flightId}
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Button variant="outlined" className="buttonClass" onClick={loggit}>
                        <Typography className="typogClass">SELECT</Typography>
                    </Button>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                    {ticket.flight.departureTime.split("T")[1]}&nbsp;&rarr;&nbsp;{ticket.flight.arrivalTime.split("T")[1]}
                    </Typography>
                </Grid>

                <Grid item xs={5}>
                    <Typography className="typogClass">
                        { (((new Date(ticket.flight.arrivalTime) - new Date(ticket.flight.departureTime)) % 86400000) % 3600000) }
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Typography className="typogClass">THREE</Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default queriedTicketList