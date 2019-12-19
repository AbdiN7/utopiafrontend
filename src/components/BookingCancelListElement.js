import React from 'react';
import { Grid, Card, Typography, Button } from '@material-ui/core';

export default class BookingCancelListElement extends React.Component{
    constructor(props){
        super();
        this.state = {isShown: true};
    }

    render(){
        console.log(this.state.isShown);
        if(this.state.isShown){
            return(
                <Card className="cardClass">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={3}>
                            <Typography className="typogClass">
                                Booking: {this.props.booking.bookingId}
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography className="typogClass">
                                Payment Status: {Boolean(this.props.booking.isPaid).toString()}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={(event)=> {this.props.handleClick(event, this.props.booking.bookingId)}} className="secondaryFormButtons" style={{margin: "15px"}}>Cancel Booking</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Booked on: {new Date(this.props.booking.bookDate).toDateString()}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Booked by: {this.props.booking.user.userFirstName}&nbsp;{this.props.booking.user.userLastName}
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