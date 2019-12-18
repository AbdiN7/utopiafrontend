import React from 'react';
import jwt_decode from 'jwt-decode'
import {getBookingsByUser, getTicketsByUser, deleteTicket, deleteBooking} from '../actions/cancelActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TicketCancelListElement from './TicketCancelListElement'
import BookingCancelListElement from './BookingCancelListElement';


class CancelForm extends React.Component{
  constructor(props){
    super();
    this.state={
      loggedIn: false,
      userId: '',
      userFirstName: '',
      userLastName: '',
      phone: '',
      address: '',
      email: '',
    };
    this.clicked = false;
    this.bookingClicked = false;
    this.ticketClicked = false;
    this.tickets = [];
    this.handleTicketClick = this.handleTicketClick.bind(this);
    this.handleBookingClick = this.handleBookingClick.bind(this);
    this.handleTicketCancelClick = this.handleTicketCancelClick.bind(this);
    this.handleBookingCancelClick = this.handleBookingCancelClick.bind(this);
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

  handleTicketClick(e){
    this.props.getTicketsByUser(this.state.userId);
    this.bookingClicked = false;
    this.ticketClicked = true;
    this.clicked = true;
  }
  handleBookingClick(e){
    this.props.getBookingsByUser(this.state.userId);
    this.ticketClicked = false;
    this.bookingClicked = true;
    this.clicked = true;
  }

  handleBookingCancelClick(e, bookingId){
    console.log(bookingId);
    this.props.deleteBooking(bookingId, this.state.userId);
  }
  handleTicketCancelClick(e, ticketId){
    this.props.deleteTicket(ticketId, this.state.userId);
  }

  render(){
    const ticketList = (
      this.props.tickets.map((ticket) =>
          <TicketCancelListElement
              key={ticket.ticketId}
              ticket={ticket}
              userId={this.state.userId}
              handleClick={this.handleTicketCancelClick}
          />
      )
    )


    const bookingList = (
      this.props.bookings.map((booking) =>
        <BookingCancelListElement
          key={booking.bookingId}
          booking={booking}
          userId={this.state.userId}
          handleClick={this.handleBookingCancelClick}
        />
      )
    );

    const Buttons = (
      <div>
        <Grid container spacing={3} justify="center">
            <Grid>
              <Button style={{margin: "15px"}} className="formButtons" onClick={this.handleTicketClick}>Cancel A Ticket</Button>
            </Grid>
            <Grid>
              <Button style={{margin: "15px"}} className="formButtons" onClick={this.handleBookingClick}>Cancel A Booking</Button>
            </Grid>
        </Grid>
      </div>
    )
    if(this.props.isPending && this.clicked){
      return(
        <div className="formContainer" style={{marginTop: "40px"}}>
          <div className="formCard">
            {Buttons}
            <CircularProgress/>
          </div>
        </div>
      )
    }
    if(this.props.isPending){
      return(
        <div className="formContainer" style={{marginTop: "40px"}}>
          <div className="formCard">
            {Buttons}
          </div>
        </div>
      )
    }
    else if(this.ticketClicked){
      return (
        <div className="formContainer" style={{marginTop: "40px"}}>
          <div className="formCard">
            {Buttons}
            {ticketList}
          </div>
        </div>
      )
    }
    else if(this.bookingClicked){
      console.log("\n\nBOOKINGS CLICKED\n");
      console.log(this.props.bookings);
      console.log("TICKET CLICKED");
      console.log(this.ticketClicked);
      return (
        
        <div className="formContainer" style={{marginTop: "40px"}}>
          <div className="formCard">
            {Buttons}
            {bookingList}
          </div>
        </div>
      )
    }
  }
}


CancelForm.propTypes = {
  getBookingsByUser: PropTypes.func.isRequired,
  getTicketsByUser: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  deleteBooking: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  bookings: state.cancel.bookings,
  tickets: state.cancel.tickets,
  isPending: state.cancel.isPending
});

export default connect(mapStateToProps, { getBookingsByUser, getTicketsByUser, deleteTicket, deleteBooking })(CancelForm);
