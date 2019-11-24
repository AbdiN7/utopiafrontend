"use strict"

import React from 'react';
import { Grid, Card, Typography, Button, ButtonGroup } from '@material-ui/core';

const QueriedTicketList = (props) => {

    let ticket = {
        "cost": "564.50",
        "flight":{
            "flightId": "404",
            "plane": "Boeing 737",
            "departureTime": "2019-11-20T18:15:40",
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
        <React.Fragment>

            <Card className="cardClass">
                <Grid container spacing={0} alignItems="center">
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
                        <Button variant="outlined" className="buttonClass" >
                            SELECT
                        </Button>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography className="typogClass">
                        {ticket.flight.departureTime.split("T")[1]}&nbsp;&rarr;&nbsp;{ticket.flight.arrivalTime.split("T")[1]}
                        </Typography>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography className="typogClass">
                            {Math.abs(((new Date(ticket.flight.arrivalTime).getTime() - new Date(ticket.flight.departureTime).getTime())/ (1000 * 60 * 60)).toFixed(1))} Hours
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography className="typogClass">${ticket.cost}</Typography>
                    </Grid>
                </Grid>
                
            </Card>
        <ButtonGroup>
            <Button onClick={props.prevStep}>
                Prev
            </Button>
            <Button>
                Next
            </Button>
        </ButtonGroup>
       
        </React.Fragment>

    );
}

export default QueriedTicketList