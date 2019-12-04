// import React from 'react';
 import Grid from '@material-ui/core/Grid';
// //import Button from '@material-ui/core/Button';
 import Stripe from './Stripe.js';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';

import TicketCard from './TicketCard'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({

//     card: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 0,
//     },
// });

export default class SimpleCard extends React.Component {

  //const classes = useStyles();
    render(){
        const tickets = [{
            ticketId: 1,
            flightId: 1,
            bookingId: 1,
            cost: 55.75,
            ticketDate: '2020-11-11'
        },
        {
            ticketId: 1,
            flightId: 1,
            bookingId: 1,
            cost: 255.15,
            ticketDate: '2020-12-12'
        },
        ]
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
                <TicketCard props = {tickets}/>

                {/* <Stripe values={this.state}/> */}
            </div>
        );
    }
}

// class PaymentForm extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("These are payment form props");
//     console.log(props);
//     this.state=props;
//   }

//   render(){
//       return(
//             <div>
//                 <Grid container xs={12}>
//                         <Grid item xs={12}>
//                             <h1>Checkout</h1>
//                         </Grid>
//                         <Container>
//                             <Typography variant='h6'>
//                                 Traveller Info
//                             </Typography>
//                             <Grid item xs={12}>
//                                 <Grid item xs={3}>
//                                     Name
//                                 </Grid>
//                                 <Grid item xs={9}>
//                                     Last Name, First Name
//                                 </Grid>
//                             </Grid>
//                         </Container>
//                         <Container>
//                             <Typography>
//                                 Flight Info
//                             </Typography>
//                             <Grid item xs={8}>
//                                 Items
//                             </Grid>
//                         </Container>
//                         <Container>
//                             <Typography>
//                                 Booking Info
//                             </Typography>
//                             <Grid item xs={8}>
//                                 Items
//                             </Grid>
//                         </Container>
                        
//                 </Grid>
//                 <br></br>
//                 <br></br>
//                 <Stripe values={this.state}/>
//             </div>
//       )
//   }
 
// }
//export default PaymentForm