
/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const url = "http://ansible-spring-lb-232633842.us-east-2.elb.amazonaws.com/charge"; // site that doesn’t send Access-Control-*

export default class Payment extends React.Component {
    constructor(props){
        super();
        this.state=this.props;
    }

    onToken = (token) => {
        fetch(url, {
            method: 'POST',
            headers: {'token': JSON.stringify(token),
                        'amount': this.props.cost},
        }).then(response => {
            response.json().then(data => {
                window.location.href = "http://utopia-airline.s3-website.us-east-2.amazonaws.com/#/";
                alert(`Enjoy your flight, ${data.source.name}`);
            });
        });
    }
  
    render() {
        return (
            <StripeCheckout
                stripeKey="pk_test_OIWeWKfTkuN2DuNcic60fqAi00CjwhKqQn"
                amount={this.props.cost*100}
                description="Flight Tickets"
                image="https://i.imgur.com/QJhVXLz.png"
                locale="auto"
                name="Utopia Airlines"
                label="Finish and Pay with 💳"
                token={this.onToken}
            />
        )
    }
  }
