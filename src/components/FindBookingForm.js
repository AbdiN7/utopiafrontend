import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import TicketListElement from './TicketListElement'
import {getBookingById, getTicketsById} from '../actions/bookingActions';

class FindBookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookingIdInput: null,
            userEmailInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.getBookingById(e.target.bookingIdInput.value);
        this.props.getTicketsById(e.target.bookingIdInput.value);
    }

    // just for debugging
    handleClick(e){
        console.log("e is clicked")
    }

    render(){
        let bookingCard = (<div></div>);
        let ticketList = (<div></div>);
        const findBookingForm = (
            <form style={{marginBottom: "20px"}} onSubmit={this.handleSubmit}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={7}>
                        <TextField
                            style={{color: '#eeeeee', width:"100%"}}
                            onChange={this.handleChange}
                            defaultValue={this.state.userEmailInput}
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
                            defaultValue={this.state.bookingIdInput}
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

        // if an action is currently happening, return the findBookingForm and a spinner
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

        if(this.props.booking.bookingId && this.props.booking.user.email !== this.state.userEmailInput){
            return(
                <div className="formContainer" style={{marginTop: "40px"}}>
                    <div className="formCard">
                        {findBookingForm}
                    </div>
                </div>
            );
        }
        
        // if we have a booking and tickets, display it, otherwise display the default value above
        if(this.props.booking.bookingId && this.props.tickets.length >= 1){
            bookingCard = (
                <Card className="cardClass">
                    <Grid container spacing={3} alignItems="center">
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
                                Booked by: {this.props.booking.user.userFirstName}&nbsp;{this.props.booking.user.userLastName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            );

            ticketList = (
                this.props.tickets.map((ticket) =>
                    <TicketListElement
                        key={ticket.ticketId.toString()}
                        ticket={ticket}
                    />
                ))
        }
        
        return(
            <div className="formContainer" style={{marginTop: "40px"}}>
                <div className="formCard">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {findBookingForm}
                        </Grid>

                        <Grid item xs={12}>
                            {bookingCard} 
                        </Grid>

                        <Grid item xs={12}>
                            {ticketList}
                        </Grid>
                    </Grid>
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
