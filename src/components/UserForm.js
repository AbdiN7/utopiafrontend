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
            bookingId: null,
            ticketDate: new Date(),
            ticketCount: null,
            ticketCost: null,
            srcAirport: null,
            destAirport: null,
            selectedFlight: null
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    
    
   
render() {
    const { step } = this.state;
    const { userFirstName, userLastName, address, email, phone, ticketDate, ticketCount, ticketCost, srcAirport,destAirport, selectedFlight } = this.state;
    const userValues = { userFirstName, userLastName, address, email , phone};
    const bookingValues = {ticketDate, ticketCount, ticketCost, srcAirport,destAirport, selectedFlight};
    
    switch (step) {
        case 1:
            return (
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                        <FlightDate
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {bookingValues}
                        />
                    </div>
                </div>
          
            );
        case 2:
            return (
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                    <PathForm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {bookingValues}
                        // values={values}
                        />
                    </div>
                </div>
                       
              
            
            );
        case 3:
            return(
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                        <FlightList
                            srcAirport="AAA"
                            destAirport="BBB"
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values = {bookingValues}
                        />
                    </div>

                </div>
            );
        case 4:
                return (
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                        <SignUp
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={userValues}
                        //billing={billingValues}
                        />
                        </div>
                    </div>
                    
                );
        case 5:
                console.log("Hello world");
                console.log(this.userValues);
                return(
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                            <PaymentForm
                                prevStep={this.prevStep}
                                values = {bookingValues}
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
