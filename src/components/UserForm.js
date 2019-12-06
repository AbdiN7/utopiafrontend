import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';
import FlightList from './FlightList';
import PaymentForm from './PaymentForm';
import jwt_decode from 'jwt-decode'

export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1 ,
            // user information
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
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleTicketDateChange = this.handleTicketDateChange.bind(this);
        this.handleSrcAirportChange = this.handleSrcAirportChange.bind(this);
        this.handleDestAirportChange = this.handleDestAirportChange.bind(this);
        this.handleTicketCountChange = this.handleTicketCountChange.bind(this);
        this.handleFlightChange = this.handleFlightChange.bind(this);
        this.handleBookingChange = this.handleBookingChange.bind(this);
    }

    componentDidMount() {
        if(localStorage.usertoken)
        {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
            userFirstName: decoded.userFirstName,
            userLastName: decoded.userLastName,
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
    }
    
   
render() {
    const { step } = this.state;
    const { userFirstName, userLastName, address, email, phone, ticketDate, ticketCount, ticketCost, srcAirport, destAirport, selectedFlight, createdBooking } = this.state;
    const userValues = { userFirstName, userLastName, address, email , phone};
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
            console.log("\nBOOKING VALS:\n")
            console.log(bookingValues)
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
                        //billing={billingValues}
                    />
                    </div>
                </div>
                
            );
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
