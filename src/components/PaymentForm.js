
import Grid from '@material-ui/core/Grid';
import Stripe from './Stripe.js';

import TicketCard from './TicketCard';
import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getTicketsById} from '../actions/bookingActions';

class PaymentForm extends React.Component {
    constructor(props){
        super(props);
        this.cost = 0;
        this.state= {cost: 0};
        console.log("PaymentForm Props\n\n\n\n");
        console.log(props);
        // this.cost = 0;
    }

    componentDidMount(){
        this.props.getTicketsById(this.props.bookingValues.createdBooking.bookingId)
        this.findCost()
    }

    findCost(){
        let temp = 0;
        this.props.tickets.forEach(element => {
            temp = temp + element.cost;
        });
        this.cost = temp;
    }

    render(){
        if(this.props.isPending){
            return(
                <div>
                    <h1>Checkout</h1>
                    <CircularProgress className='spinner'/>
                </div>
            )
        }
        console.log("Tickets")
        console.log(this.props.tickets)
        this.findCost()
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
                {this.props.tickets.map((ticket) => 
                    <TicketCard key= {ticket.ticketId} ticket = {ticket}/>
                )}
                <Stripe values={this.cost} bookingId={this.props.bookingValues.createdBooking.bookingId}/>
            </div>
        );
    }
}

PaymentForm.propTypes = {
    getTicketsById: PropTypes.func.isRequired,
    isPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    tickets: state.booking.tickets,
    isPending: state.booking.isPending
});

export default connect(mapStateToProps, { getTicketsById })(PaymentForm);
