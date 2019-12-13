import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import {postBooking} from '../actions/bookingActions'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function SignUp(props) {

    function submitBooking(){
        // props.postBooking(  props.userValues.userId, 
        //                     props.bookingValues.selectedFlight.flightId, 
        //                     props.bookingValues.ticketCount, 
        //                     props.bookingValues.ticketDate.toISOString().split('T')[0], 
        //                     props.bookingValues.ticketCost)

        // props.handleBookingChange(props.postedBooking)
        // props.nextStep();

        // console.log("POSTED BOOKING:")
        // console.log(props.postedBooking);
        
        const bookingData = {
            userId: props.userValues.userId,
            flightId: props.bookingValues.selectedFlight.flightId,
            ticketCount: props.bookingValues.ticketCount,
            ticketDate: props.bookingValues.ticketDate.toISOString().split('T')[0],
            ticketCost: props.bookingValues.ticketCost,
        };
        
        axios.post('https://ma35v84odj.execute-api.us-east-2.amazonaws.com/dev/booking', bookingData)
        .then((resolve) => {
            props.handleBookingChange(resolve.data);
            props.nextStep();
        })
        .catch((reject) => {
            console.log("BOOKING REJECTED:\n");
            console.log(reject);
        });
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button onClick={props.prevStep} className="formButtons">
                        Prev
                    </Button>
                </Grid>

                <Grid item xs ={4}/>

                <Grid item xs={5}>
                    <Button onClick={submitBooking} className="formButtons">
                        Submit
                    </Button>
                </Grid>

                <Container spacing={1} style={{ textColor: "#eeeeee", alignContent: 'center'}} component="main" maxWidth="xs">
                    <div >
                        <Avatar style={{ backgroundColor: "#00adb5"}}>
                            <AirlineSeatReclineNormalIcon/>
                        </Avatar>

                        <Typography style={{color: "#eeeeee"}} component="h1" variant="h5">
                            Traveller Info
                        </Typography>

                        <form  onSubmit={props.handleOnClick} noValidate>
                            <Grid spacing={1} container>
                                <Grid item xs>
                                    <TextField
                                        style={{color: '#eeeeee'}}
                                        
                                        onChange={props.handleChange}
                                        defaultValue={props.userValues.userFirstName}
                                        required
                                        fullWidth
                                        id="userFirstName"
                                        label="First Name"
                                        name="userFirstName"
                                    />
                                </Grid>

                                <Grid item/>

                                <Grid item xs>
                                    <TextField
                                        style={{color: '#eeeeee'}}
                                        
                                        onChange={props.handleChange}
                                        defaultValue={props.userValues.userLastName}
                                        required
                                        fullWidth
                                        id="userLastName"
                                        label="Last Name"
                                        name="userLastName"
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                    style={{color: '#eeeeee'}}
                                    
                                    onChange={props.handleChange}
                                    defaultValue={props.userValues.email}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                            />
                            <TextField
                                style={{color: '#eeeeee'}}
                                
                                required
                                fullWidth
                                onChange={props.handleChange}
                                defaultValue={props.userValues.address}
                                name="address"
                                label="Address"
                                type="address"
                                id="address"
                            />
                            <TextField
                                style={{color: '#eeeeee'}}
                                
                                required
                                fullWidth
                                onChange={props.handleChange}
                                defaultValue={props.userValues.phone}
                                name="phone"
                                label="Phone"
                                type="phone"
                                id="phone"
                            />
                        </form>
                    </div>
                </Container>
            </Grid>
        </React.Fragment>
    );
}


SignUp.propTypes = {
    postBooking: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    postedBooking: state.booking.postedBooking
});

export default connect(mapStateToProps, { postBooking })(SignUp);
