
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
    }


    componentWillMount() {
        axios.get("http://localhost:8090/utopia/tickets/1")
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
                                Last Name, First Name
                            </Grid>
                            <Grid item xs={3}>
                                Address
                            </Grid>
                            <Grid item xs={9}>
                                The User Address
                            </Grid>
                            <Grid item xs={3}>
                                Phone
                            </Grid>
                            <Grid item xs={9}>
                                The User Phone
                            </Grid>
                            <Grid item xs={3}>
                                Email
                            </Grid>
                            <Grid item xs={9}>
                                The User Email
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