import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        color: '#EEEEEE',
        // backgroundColor: '#303841',
    },
      input: {
        color: "#eeeeee"
      },
      palette: {
        width:'90',
        textColor: "#eeeeee",
        alignContent: 'center'
     },
     avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#00adb5",
      },
      paper: {
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
}));

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
        <Container spacing={1} className={classes.palette} component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AirlineSeatReclineNormalIcon />
            </Avatar>
            <Typography className={classes.root} component="h1" variant="h5">
            Traveller Info
            </Typography>
            <form  onSubmit={handleOnClick} className={classes.root} noValidate>
                <Grid spacing={1} container>
                    <Grid item xs>
                    <TextField
                        className="classes.root"
                        InputProps={{className: classes.input}}
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
                        className='classes.root'
                        InputProps={{className: classes.input}}
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
                        className='classes.root'
                        InputProps={{className: classes.input}}
                        onChange={props.handleChange}
                        defaultValue={props.values.email}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                />
                <TextField
                    className='classes.root'
                    InputProps={{className: classes.input}}
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
                    className='classes.root'
                    InputProps={{className: classes.input}}
                    required
                    fullWidth
                    onChange={props.handleChange}
                    defaultValue={props.values.phone}
                    name="phone"
                    label="Phone"
                    type="phone"
                    id="phone"
                />
                <Box mt={2}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={props.nextStep}
                    >
                        Sign Up
                    </Button>
                </Box>
            </form>
        </div>
        </Container>
    );
}
