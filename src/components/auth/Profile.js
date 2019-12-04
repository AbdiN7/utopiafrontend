import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userFirstName: '',
      userLastName: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      userFirstName: decoded.userFirstName,
      userLastName: decoded.userLastName,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="formContainer"
      style={{marginTop: "40px"}}>
           <div className="formCard" >
            <h1 >PROFILE</h1>
            <Grid container spacing={3}>
              <Grid item xs={6} ><div style={{backgroundColor: "eeeeee", borderRadius: "30px"}}>First Name</div></Grid>
              <Grid item xs={6}>{this.state.userFirstName}</Grid>
              <Grid item xs={6}>Last Name</Grid>
              <Grid item xs={6}>{this.state.userLastName}</Grid>
              <Grid item xs={6}>Email</Grid>
              <Grid item xs={6}>{this.state.email}</Grid>
            </Grid>
      </div>
      </div>
   
     
    )
  }
}

export default Profile
