import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';
import QueriedTicketList from './QueriedTicketList';


export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1 ,
            userName: '',
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
    const { userName, address, email, phone, date } = this.state;
    const userValues = { userName, address, email , phone};
    const tripValues = {date};
    switch (step) {
        case 1:
            return (
                <div className="formContainer">
                    <div className="formCard">
                    <SignUp
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={userValues}
                    />
                    </div>
                </div>
                
            );
        case 2:
                console.log(userValues)

            return (
                <div className="formContainer">
                    <div className="formCard">
                        <FlightDate
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={tripValues}
                        />
                    </div>
                </div>
          
            );
        case 3:
            console.log(tripValues)
            return (
                <div className="formContainer">
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
        case 4:
            return(
                <div className="formContainer">
                    <div className="formCard">
                        <QueriedTicketList 
                            prevStep={this.prevStep}
                        />
                    </div>

                </div>
            )
    }

    }
}
