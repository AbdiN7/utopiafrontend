import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

export default function SignUp(props) {

    const classes = useStyles();

    function handleOnClick(event){
        event.persist();
        event.preventDefault();
        console.log(event.target.userFirstName.value);
        console.log(event.target.userLastName.value);
        console.log(event.target.email.value);
        console.log(event.target.address.value);
        console.log(event.target.phone.value);
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
                        <Button onClick={props.nextStep} className="formButtons">
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
                                        defaultValue={props.values.userFirstName}
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
                                        defaultValue={props.values.userLastName}
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
                                        defaultValue={props.values.email}
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
                                    defaultValue={props.values.address}
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
                                    defaultValue={props.values.phone}
                                    name="phone"
                                    label="Phone"
                                    type="phone"
                                    id="phone"
                                />
                            </form>
                        </div>
                        </Container>
            </React.Fragment>
        );
    }
    export default SignUp;