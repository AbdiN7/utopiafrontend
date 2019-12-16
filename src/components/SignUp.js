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
import {addGuest} from '../actions/authActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import store from '../store';
import CircularProgress from '@material-ui/core/CircularProgress';

function SignUp(props) {
    let bookingData = {}
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
        if(props.userValues.userId){
             bookingData = {
                userId: props.userValues.userId,
                flightId: props.bookingValues.selectedFlight.flightId,
                ticketCount: props.bookingValues.ticketCount,
                ticketDate: props.bookingValues.ticketDate.toISOString().split('T')[0],
                ticketCost: props.bookingValues.ticketCost,
            };
        }
        else{
            console.log(props.guestId)
             bookingData = {
                userId: props.guestId,
                flightId: props.bookingValues.selectedFlight.flightId,
                ticketCount: props.bookingValues.ticketCount,
                ticketDate: props.bookingValues.ticketDate.toISOString().split('T')[0],
                ticketCost: props.bookingValues.ticketCost,
            }
        }
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
    const createGuest = async () => {
        const guest = {
            userFirstName: props.userValues.userFirstName,
            userLastName: props.userValues.userLastName,
            email: props.userValues.email,
            phone: props.userValues.phone,
            address: props.userValues.address
        }
        props.handleButtonClicked();
        await props.addGuest(guest);
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
                    <Button onClick={props.guestIdPending ? null :submitBooking} className={props.guestIdPending ? "formButtonsInactive" : "formButtons"}>
                        {props.userValues.buttonClicked ? <CircularProgress className='spinner'/> : "Submit"}
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
                            {!props.userValues.isLoggedIn ? 
                                <div>
                                    <Button style={{marginTop: '50px'}} 
                                            className={!props.guestIdPending ? "formButtonsInactive": "formButtons"}
                                            onClick={createGuest}>{props.userValues.buttonClicked ? <CircularProgress className='spinner'/> : "Confirm Your Information"}</Button>
                                </div> : <div>Logged In</div>
                            }
                        </form>
                    </div>
                </Container>
            </Grid>
        </React.Fragment>
    );
}


SignUp.propTypes = {
    postBooking: PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    postedBooking: state.booking.postedBooking,
    guestId: state.auth.guestId,
    guestIdPending: state.auth.guestIdPending
});

export default connect(mapStateToProps, { postBooking, addGuest })(SignUp);
