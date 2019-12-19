import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

class TicketCancelListElement extends React.Component{
    constructor(props){
        super();
        this.state = {isShown: true};
    }

    render(){
        console.log(this.state.isShown)
        if(this.state.isShown){
            return(
                <Card className="cardClass">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={3}>
                            <Typography className="typogClass">
                                # {this.props.ticket.ticketId}
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography className="typogClass">
                                UTA {this.props.ticket.flight.flightId}
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography className="typogClass">
                                ${this.props.ticket.cost}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={(event)=> {this.props.handleClick(event, this.props.ticket.ticketId)}} className="secondaryFormButtons" style={{margin: "15px"}}>Cancel Ticket</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className="typogClass">
                            {this.props.ticket.flight.flightPath.srcAirport.airportCode}&nbsp;&rarr;&nbsp;{this.props.ticket.flight.flightPath.destAirport.airportCode}
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className="typogClass">
                                {new Date(this.props.ticket.ticketDate).toLocaleString()}, {this.props.ticket.flight.departureTime}&nbsp;&rarr;&nbsp;{this.props.ticket.flight.arrivalTime}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            );
        }
        else{
            return(
            <div>
            </div>
            );
        }
    }
}
  
export default TicketCancelListElement;
