import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Payment from './Payment';

class Stripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_OIWeWKfTkuN2DuNcic60fqAi00CjwhKqQn">
        <div>
          <Elements>
            <Payment />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Stripe;