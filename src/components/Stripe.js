import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Payment from './Payment';

class Stripe extends Component {
    constructor(props){
        super(props);
        this.cost = props;
    }
    render() {
        return (
        <StripeProvider apiKey="pk_test_OIWeWKfTkuN2DuNcic60fqAi00CjwhKqQn">
            <div>
            <Elements>
                <Payment cost={this.props.values}/>
            </Elements>
            </div>
        </StripeProvider>
        );
    }
}

export default Stripe;