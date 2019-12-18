"use strict"

import React from 'react';
import {Route , Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import home from './home';



export default class AppBarHeader extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.setState({loggedIn: false})
    this.props.history.push(`/`)
  }
  login(e) {
    e.preventDefault()
    this.setState({loggedIn: true})
  }
  render(){
    const loginRegLink = (
      <div >
          <Button onClick={this.login.bind(this)}><Link to='/login'>Login</Link></Button>
          <Button><Link to='/register'>Register</Link></Button>
      </div>
    )
    const LogoutProfileLink = (
      <div >
        <Button><Link to='/profile'>Profile</Link></Button>
        <Button 
        onClick={this.logOut.bind(this)}
        ><Link to='/'>Logout</Link></Button>
      </div>
    )
    // const useStyles = makeStyles(theme => ({
    //   grow: {
    //     flexGrow: 1,
    //   },
    //   menuButton: {
    //     marginRight: theme.spacing(2),
    //   },
    //   title: {
    //     display: 'none',
    //     [theme.breakpoints.up('sm')]: {
    //       display: 'block',
    //     },
    //   },
    
    //   sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up('md')]: {
    //       display: 'flex',
    //     },
    //   },
    //   sectionMobile: {
    //     display: 'flex',
    //     [theme.breakpoints.up('md')]: {
    //       display: 'none',
    //     },
    //   },
    // })
    // );
//https://i.imgur.com/Cmbf7ln.png
  return (
    <div style={{flexGrow: 1}}>
      <AppBar className="appbar" position="static">
        <Toolbar>
          <Link to="/">
          <img className='logo' src='https://i.imgur.com/QJhVXLz.png' alt=''/>
          </Link>
          <Button><Link to="/form"> Create Booking </Link></Button>
          <Button><Link to="/flight"> Find Booking </Link></Button>
          <Button><Link to="/cancel"> Cancel Booking </Link></Button>
          <div style={{flexGrow: 1}} />
          {localStorage.usertoken ? LogoutProfileLink : loginRegLink}
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
