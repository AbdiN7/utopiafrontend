import React from 'react';
import jwt_decode from 'jwt-decode'

export default class BookingList extends React.Component{
  constructor(){
    super();
    this.state={
      loggedIn: false,
      userId: '',
      userFirstName: '',
      userLastName: '',
      phone: '',
      address: '',
      email: ''
    };
  }
  componentDidMount() {
    if(localStorage.usertoken)
    {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            loggedIn: true,
            userId: decoded.userId,
            userFirstName: decoded.userFirstName,
            userLastName: decoded.userLastName,
            phone: decoded.phone,
            address: decoded.address,
            email: decoded.email
        })
    }
  }
  render(){
    console.log(this.state);
    if(this.state.userId!=="")
    {
      return (
        <div>
          {this.state.userFirstName}
        </div>
      )
    }
    else{
      return(
        <div>
          <h1>
            Must be logged in to cancel a booking.
          </h1>
        </div>
      )
    }
  }
}
