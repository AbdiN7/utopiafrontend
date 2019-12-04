
import Grid from '@material-ui/core/Grid';
import Stripe from './Stripe.js';

import TicketCard from './TicketCard';
import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//const url = "http://localhost:8090/utopia/tickets/1";

export default class SimpleCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {tickets: [],
                    cost: 0};
        this.cost = 0;
                console.log("ldsfkj");
        console.log(props);
    }


    componentWillMount() {
        axios.get("https://w1714otaj1.execute-api.us-east-1.amazonaws.com/dev/ticket/booking/67")
        .then((resolve) => {
            this.setState({tickets: resolve.data});
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
                            <Grid item xs={9}>
                                {this.props.userValues.userLastName}, {this.props.userValues.userFirstName}
                            </Grid>
                            <Grid item xs={3}>
                                Address
                            </Grid>
                            <Grid item xs={9}>
                                {this.props.userValues.address}
                            </Grid>
                            <Grid item xs={3}>
                                Phone
                            </Grid>
                            <Grid item xs={9}>
                                {this.props.userValues.phone}
                            </Grid>
                            <Grid item xs={3}>
                                Email
                            </Grid>
                            <Grid item xs={9}>
                                {this.props.userValues.email}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {this.state.tickets.map((ticket) => 
                    <TicketCard ticket = {ticket}/>
                )}

                <Stripe values={this.state.cost}/>
            </div>
        );
    }
}