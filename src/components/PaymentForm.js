
import Grid from '@material-ui/core/Grid';
import Stripe from './Stripe.js';

import TicketCard from './TicketCard';
import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class SimpleCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {tickets: [],
                    cost: 0,
                    spinning: true};
        this.cost = 0;
    }

    componentDidMount() {
        



        console.log("the booking im gonna look at:")
        console.log(this.props.bookingValues.createdBooking.bookingId);
        axios.get(`https://ma35v84odj.execute-api.us-east-2.amazonaws.com/dev/ticket/booking/${this.props.bookingValues.createdBooking.bookingId}`)
        .then((resolve) => {
            this.setState({tickets: resolve.data,
                            spinning: false});
            this.findCost()
        })
        .catch((reject) => {
            console.log("REJECTED: \n" + reject )
        });
    }

    findCost(){
        let temp = 0;
        this.state.tickets.forEach(element => {
            temp = temp + element.cost;
        });
        this.setState({cost: temp});
    }

    render(){
        if(this.state.spinning){
            return(
                <div>
                    <h1>Checkout</h1>
                    <CircularProgress className='spinner'/>
                </div>
            )
        } else{
            return (
                <div>
                    <h1>Checkout</h1>
                    <Card className='paymentForm'>
                        <CardContent>
                            <Typography variant='h6'>
                                Traveller Info
                            </Typography>
                            <Grid item xs={12}>
                                <Grid item xs={3}>
                                    Name
                                </Grid>
                                <Grid className= 'ticketListRight' item xs={8}>
                                    {this.props.userValues.userLastName}, {this.props.userValues.userFirstName}
                                </Grid>
                                <Grid item xs={3}>
                                    Address
                                </Grid>
                                <Grid className= 'ticketListRight' item xs={8}>
                                    {this.props.userValues.email}
                                </Grid>
                                <Grid item xs={3}>
                                    Phone
                                </Grid>
                                <Grid className= 'ticketListRight' item xs={8}>
                                    {this.props.userValues.phone}
                                </Grid>
                                <Grid item xs={3}>
                                    Email
                                </Grid>
                                <Grid className= 'ticketListRight' item xs={8}>
                                    {this.props.userValues.email}
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    {this.state.tickets.map((ticket) => 
                        <TicketCard key= {ticket.ticketId} ticket = {ticket}/>
                    )}

                    <Stripe values={this.state.cost}/>
                </div>
            );
        }
    }
}