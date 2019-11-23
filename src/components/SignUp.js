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
        <Container className={classes.palette} component="main" maxWidth="xs">
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AirlineSeatReclineNormalIcon />
            </Avatar>
            <Typography className={classes.root} component="h1" variant="h5">
            Sign up
            </Typography>
            <form  onSubmit={handleOnClick} className={classes.root} noValidate>
                <Grid container>
                    <Grid item xs>
                    <TextField
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        id="userFirstName"
                        label="First Name"
                        name="userFirstName"
                    />
                    </Grid>
                    <Grid item xs>
                    <TextField
                        className='classes.root'
                        InputProps={{className: classes.input}}
                        required
                        fullWidth
                        id="userLastName"
                        label="LastName"
                        name="userLastName"
                    />
                    </Grid>
                </Grid>
                <TextField
                        className='classes.root'
                        InputProps={{className: classes.input}}
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
// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';



// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://material-ui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  
//   const useStyles = makeStyles(theme => ({
//     '@global': {
//       body: {
//         backgroundColor: theme.palette.common.white,
//       },
//     },
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
  
//   export default function SignIn() {
//     const classes = useStyles();
  
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Box mt={8}>
//           <Copyright />
//         </Box>
//       </Container>
//     );
//   }