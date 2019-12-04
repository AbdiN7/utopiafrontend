import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';
import QueriedTicketList from './QueriedTicketList';
import PaymentForm from './PaymentForm';
import jwt_decode from 'jwt-decode'

export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1 ,
            userFirstName: '',
            userLastName: '',
            address: '',
            email: '',
            airpots: [],
            phone: '',
           
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
    const { userFirstName, userLastName, address, email, phone, airpots } = this.state;
    const userValues = { userFirstName, userLastName, address, email , phone};
    switch (step) {
        case 1:
            return (
                <div className="formContainer"
                style={{marginTop: "40px"}}>
                    <div className="formCard">
                        <FlightDate
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
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
