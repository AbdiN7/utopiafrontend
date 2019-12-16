import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import FlightListElement from './FlightListElement'
import {getBookingById, getTicketsById} from '../actions/bookingActions';

class FindBookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookingIdInput: 0,
            userEmailInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
        // console.log("FindBookingForm State:")
        // console.log(this.state)
    };

    handleSubmit(e){
        e.preventDefault();
        // console.log("HANDLING:")
        // console.log(e.target.userEmailInput.value);
        console.log(e.target.bookingIdInput.value)
        this.props.getBookingById(e.target.bookingIdInput.value);
    }

    handleClick(e){
        console.log("e is clicked")
    }

    render(){
        let bookingCard = (<div>no booking</div>);
        let ticketList = (<div>no tickets</div>);
        const findBookingForm = (
            <form style={{marginBottom: "20px"}} onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                    {/* TOP ROW  */}
                    <Grid item xs={7}>
                        <TextField
                            style={{color: '#eeeeee'}}
                            onChange={this.handleChange}
                            // defaultValue={props.userValues.userFirstName}
                            required
                            fullWidth
                            label="Email Address"
                            id="userEmailInput"
                            name="userEmailInput"
                        />
                    </Grid>
                        
                    <Grid item xs={3}>
                        <TextField
                            style={{color: '#eeeeee'}}
                            onChange={this.handleChange}
                            // defaultValue={props.userValues.userFirstName}
                            required
                            fullWidth
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            }}
                            label="Booking Id"
                            id="bookingIdInput"
                            name="bookingIdInput"
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button className="formButtons" type="submit">
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );

        // if an action is currently happening, show a spinner
        if(this.props.isPending){
            return(
                <div className="formContainer" style={{marginTop: "40px"}}>
                    <div className="formCard">
                        {findBookingForm}
                        <div>
                            <h1>Loading</h1>
                            <CircularProgress className='spinner'/>
                        </div>
                    </div>
                </div>
            );
        }
        
        // if we have a booking, display it, otherwise display the default value above
        if(this.props.booking.bookingId){
            bookingCard = (
                <Card className="cardClass">
                    <Grid container spacing={0} alignItems="center">
                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Booking: {this.props.booking.bookingId}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Payment Status: {Boolean(this.props.booking.isPaid).toString()}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Booked on: {new Date(this.props.booking.bookDate).toLocaleString()}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className="typogClass">
                                Booked by: {this.props.booking.user.userFirstName}, {this.props.booking.user.userLastName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            );
        }

        // if we have tickets, display them, otherwise display the default value above
        if(this.props.tickets.length >= 1){
            ticketList = (
                this.props.tickets.map((ticket) =>{
                    <FlightListElement
                        key={ticket.flight.flightId.toString()}
                        values={ticket.flight}
                        ticketDate={ticket.ticketDate}
                        selectButtonClicked={this.handleClick}
                    />
                })
            );
        }
        
        return(
            <div className="formContainer" style={{marginTop: "40px"}}>
                <div className="formCard">
                    
                    {findBookingForm}
                    {/* BOOKING DETAILS  */}
                    {bookingCard}
                    {/* TICKETS LIST */}
                    {ticketList}
                </div>
            </div>
        );
    }
}

FindBookingForm.propTypes = {
    getBookingById: PropTypes.func.isRequired,
    getTicketsById: PropTypes.func.isRequired,
    isPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    booking: state.booking.booking,
    tickets: state.booking.tickets,
    isPending: state.booking.isPending
});

export default connect(mapStateToProps, { getBookingById, getTicketsById })(FindBookingForm);
