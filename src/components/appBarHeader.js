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

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function AppBarHeader() {
  const classes = useStyles();
//https://i.imgur.com/Cmbf7ln.png
  return (
    <div className={classes.grow} m={0}>
      <AppBar className="appbar"style={{backgroundColor: "#00adb5"}}position="static">
        <Toolbar>
          <img className='logo' src='https://i.imgur.com/5Xl9TSI.png' alt=''/>
          <Button><Link to="/" >HOME</Link></Button>
          <Button><Link to="/booking">Booking</Link></Button>
          <Button><Link to="/flight">Flights</Link></Button>
          <Button><Link to="/form"> Form </Link></Button>
          <div className={classes.grow} />
          <h1>Guest</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
