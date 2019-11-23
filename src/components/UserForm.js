import React, {Component} from 'react';
import FlightDate from './FlightDate';
import PathForm from './PathForm';
import SignUp from './SignUp';


export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            step: 1 ,
            firstName: '',
            lastName: '',
            email: '',
           
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    const { firstName, lastName, email } = this.state;
    const values = { firstName, lastName, email };

    switch (step) {
        case 1:
            return (
                <div className="formContainer">
                    <div className="formCard">
                    <SignUp
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="formContainer">
                    <div className="formCard">
                        <FlightDate
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    </div>
                </div>
          
            );
        case 3:
            return (
                <div className="formContainer">
                    <div className="formCard">
                    <PathForm
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    </div>
                </div>
                       
              
            
            );
    }

    }
}
