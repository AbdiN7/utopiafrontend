import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

export default function SignUp(props) {
    function handleOnClick(event){
        event.persist();
        event.preventDefault();
        console.log(event.target.userFirstName.value);
        console.log(event.target.userLastName.value);
        console.log(event.target.email.value);
        console.log(event.target.address.value);
        console.log(event.target.phone.value);
    }

    function submitBooking(){
        const bookingData = {
            userId: 1, // TODO use created user
            flightId: props.bookingValues.selectedFlight.flightId,
            ticketCount: props.bookingValues.ticketCount,
            ticketDate: props.bookingValues.ticketDate.toISOString().split('T')[0],
            ticketCost: props.bookingValues.ticketCost,
        };

        console.log("bookingData:\n")
        console.log(bookingData)

        axios.post('https://5tg2w27q83.execute-api.us-east-1.amazonaws.com/dev/booking', bookingData)
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
                        {console.log("Hello world!")}
                        {console.log(props)}
                        <Button onClick={submitBooking} className="formButtons">
                            Submit
                        </Button>
                    </Grid>
                    <Container spacing={1} style={{
                         textColor: "#eeeeee",
                         alignContent: 'center'
                    }} 
                    component="main" maxWidth="xs">
                        <div >
                            <Avatar style={{ backgroundColor: "#00adb5"}}>
                                <AirlineSeatReclineNormalIcon />
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
                                    <Grid item>  </Grid>
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