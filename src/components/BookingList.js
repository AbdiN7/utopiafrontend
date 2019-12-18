import React from 'react';
import jwt_decode from 'jwt-decode'
import {getBookingsByUser, getTicketsByUser} from '../actions/cancelActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TicketListElement from './TicketListElement'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import FindBookingForm from './FindBookingForm';


class BookingList extends React.Component{
  constructor(props){
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
    this.clicked = false;
    this.bookingClicked = false;
    this.ticketClicked = false;
    this.tickets = [];
    this.handleTicketClick = this.handleTicketClick.bind(this);
    this.handleBookingClick = this.handleBookingClick.bind(this);
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
        ///this.props.getTicketsByUser(jwt_decode().userId);
        console.log("\nHere\n");
        ///console.log(this.props.getTicketsByUser(jwt_decode().userId));
    }
    console.log("Here123");
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

  render(){
    console.log("\n\nProps");
    console.log(this.props);

    const ticketList = (
      this.props.tickets.map((ticket) =>
          <TicketListElement
              key={ticket.ticketId.toString()}
              ticket={ticket}
          />
      )
    )


    const bookingList = (
      this.props.bookings.map((booking) =>
        <Card className="cardClass">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={6}>
                    <Typography className="typogClass">
                        Booking: {booking.bookingId}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography className="typogClass">
                        Payment Status: {Boolean(booking.isPaid).toString()}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography className="typogClass">
                        Booked on: {new Date(booking.bookDate).toLocaleString()}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography className="typogClass">
                        Booked by: {booking.user.userFirstName}&nbsp;{booking.user.userLastName}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
      )
    );

    const Buttons = (
      <div>
        <Grid container spacing={3} justify="center">
            <Grid>
              <Button onClick={this.handleTicketClick}>Cancel A Ticket</Button>
            </Grid>
            <Grid>
              <Button onClick={this.handleBookingClick}>Cancel A Booking</Button>
            </Grid>
        </Grid>
      </div>
    )
    if(this.props.isPending && this.clicked){
      return(
        <div>
          {Buttons}
          <CircularProgress/>
        </div>
      )
    }
    if(this.props.isPending){
      return(
        <div>
          {Buttons}
        </div>
      )
    }
    else if(this.ticketClicked){
      return (
        <div>
          {Buttons}
          {ticketList}
        </div>
      )
    }
    else if(this.bookingClicked){
      return (
        <div>
          {Buttons}
          {bookingList}
        </div>
      )
    }
  }
}


BookingList.propTypes = {
  getBookingsByUser: PropTypes.func.isRequired,
  getTicketsByUser: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  bookings: state.cancel.bookings,
  tickets: state.cancel.tickets,
  isPending: state.cancel.isPending
});

export default connect(mapStateToProps, { getBookingsByUser, getTicketsByUser })(BookingList);
