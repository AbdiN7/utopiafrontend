import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';
import QueriedTicketList from './QueriedTicketList';
import PaymentForm from './PaymentForm';


export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1 ,
            userFirstName: '',
            userLastName: '',
            address: '',
            email: '',
            phone: '',
            date: '',
            YYYY: ''
           
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInt = this.handleInt.bind(this);
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
    handleInt(e){

    }
render() {
    const { step } = this.state;
    const { userFirstName, userLastName, address, email, phone, date } = this.state;
    const userValues = { userFirstName, userLastName, address, email , phone};
    const tripValues = {date};
    switch (step) {
        case 1:
                console.log(userValues)

            return (
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                        <FlightDate
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={tripValues}
                        />
                    </div>
                </div>
          
            );
        case 2:
            console.log(tripValues)
            return (
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                    <PathForm
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
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
                        <QueriedTicketList 
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
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
                        />
                        </div>
                    </div>
                    
                );
        case 5:
                return(
                    <div className="formContainer"
                    style={{marginTop: "40px"}}>
                        <div className="formCard">
                            <PaymentForm
                                prevStep={this.prevStep}
                            />
                        </div>
    
                    </div>
                );
        default:
            return(<div></div>);
    }

    }
}
