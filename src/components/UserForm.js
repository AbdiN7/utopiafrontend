import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';
import FlightList from './FlightList';
import PaymentForm from './PaymentForm';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            // form state
            step: 1 ,
            // user 
            loggedIn: false,
            userId: 0,
            userFirstName: '',
            userLastName: '',
            address: '',
            email: '',
            phone: '',
            // booking information
            ticketDate: new Date(),
            ticketCount: 1,
            ticketCost: null,
            srcAirport: 'AAA',
            destAirport: 'BBB',
            selectedFlight: {},
            createdBooking: {},
            //test
            buttonClicked: false
        };

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleTicketDateChange = this.handleTicketDateChange.bind(this);
        this.handleSrcAirportChange = this.handleSrcAirportChange.bind(this);
        this.handleDestAirportChange = this.handleDestAirportChange.bind(this);
        this.handleTicketCountChange = this.handleTicketCountChange.bind(this);
        this.handleFlightChange = this.handleFlightChange.bind(this);
        this.handleBookingChange = this.handleBookingChange.bind(this);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
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

    nextStep () {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep () {
        const { step } = this.state;
        this.setState({
            step: step -1
        });
    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    };

    handleTicketDateChange(e){
        this.setState({ticketDate: e});
    };

    handleSrcAirportChange(e){
        console.log(e.target.textContent)
        this.setState({srcAirport: e.target.textContent.split(' ')[0]});
    }

    handleDestAirportChange(e){
        this.setState({destAirport: e.target.textContent.split(' ')[0]});
    }

    handleTicketCountChange(e){
        this.setState({ticketCount: e.target.value});
    }

    handleFlightChange(flight, cost){
        this.setState({selectedFlight: flight});
        this.setState({ticketCost: cost});
    }

    handleBookingChange(booking){
        this.setState({createdBooking: booking});

        console.log("BOOKING MADE:");
        console.log(this.state.createdBooking);
    }
    handleButtonClicked(){
        this.setState({buttonClicked: true})
    }
    render() {
        const { step } = this.state;
        const { loggedIn, userId, userFirstName, userLastName, address, email, phone, ticketDate, ticketCount, ticketCost, srcAirport, destAirport, selectedFlight, createdBooking } = this.state;
        const userValues = { loggedIn, userId, userFirstName, userLastName, address, email , phone};
        const bookingValues = {ticketDate, ticketCount, ticketCost, srcAirport, destAirport, selectedFlight, createdBooking};
        switch (step) {
            case 1:
                console.log("\nBOOKING VALS:\n")
                console.log(bookingValues)
                return (
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                            <FlightDate
                            nextStep={this.nextStep}
                            handleTicketDateChange={this.handleTicketDateChange}
                            values = {bookingValues}
                            />
                        </div>
                    </div>
            
                );
            case 2:
                console.log("\nBOOKING VALS:\n")
                console.log(bookingValues)
                return (
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                        <PathForm
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleSrcAirportChange={this.handleSrcAirportChange}
                            handleDestAirportChange= {this.handleDestAirportChange}
                            handleTicketCountChange={this.handleTicketCountChange}
                            values = {bookingValues}
                            // values={values}
                            />
                        </div>
                    </div>
                );
            case 3:
                console.log("\nBOOKING VALS:\n")
                console.log(bookingValues)
                return(
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                            <FlightList
                                srcAirport="AAA"
                                destAirport="BBB"
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleFlightChange={this.handleFlightChange}
                                values = {bookingValues}
                            />
                        </div>

                    </div>
                );
            case 4:
                console.log("\USER VALS:\n")
                console.log(userValues)
                if(this.state.buttonClicked && this.props.guestIdPending)
                {
                    return (
                        <div className="formContainer" style={{marginTop: "40px"}}>
                            <div className="formCardInactive">
                            <CircularProgress size = {200} 
                            style={{ position: 'absolute', top: "100px",left: "36%",  right: "40%"}} 
                            className='spinner'/>
                            <SignUp
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                handleBookingChange = {this.handleBookingChange}
                                bookingValues = {bookingValues}
                                userValues = {userValues}
                                handleButtonClicked = {this.handleButtonClicked}
                            />
                            </div>
                        </div>
                    );
                }
                    return (
                        <div className="formContainer"
                        style={{marginTop: "40px"}}>
                            <div className="formCard">
                            <SignUp
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                handleBookingChange = {this.handleBookingChange}
                                bookingValues = {bookingValues}
                                userValues = {userValues}
                                handleButtonClicked = {this.handleButtonClicked}
                                />
                            </div>
                        </div>);
            case 5:
                console.log("\nBOOKING VALS:\n")
                console.log(bookingValues)
                console.log("\nUSER VALS:\n")
                console.log(this.userValues);
                return(
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                            <PaymentForm
                                prevStep={this.prevStep}
                                bookingValues = {bookingValues}
                                userValues = {userValues}
                            />
                        </div>

                    </div>
                );
            default:
                return(<div></div>);
        }
    }
}



const mapStateToProps = state => ({
    guestIdPending: state.auth.guestIdPending
});

export default connect(mapStateToProps)(UserForm);