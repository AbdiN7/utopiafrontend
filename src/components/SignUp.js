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
        backgroundColor: '#00adb5',
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
        marginTop: theme.spacing(8),
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
        console.log(event.target.userName.value);
        console.log(event.target.email.value);
        console.log(event.target.address.value);
        console.log(event.target.phone.value);
    }

    return (
        <Container className={classes.palette} component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AirlineSeatReclineNormalIcon />
            </Avatar>
            <Typography className={classes.root} component="h1" variant="h5">
            Sign up
            </Typography>
            <form  onSubmit={handleOnClick} className={classes.root} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        id="userName"
                        label="Name"
                        name="userName"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        className='classes.root'
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        className='classes.root'
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        name="address"
                        label="Address"
                        type="address"
                        id="address"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        className='classes.root'
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        name="phone"
                        label="Phone"
                        type="phone"
                        id="phone"
                    />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={props.nextStep}
                        color='primary'
                    >
                        Sign Up
                    </Button>
                </Box>
            </form>
        </div>
        </Container>
    );
}
