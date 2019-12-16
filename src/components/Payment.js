
/**
* Use the CSS tab above to style your Element's container.
*/  
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Redirect } from 'react-router-dom'

const url = "http://ansible-spring-lb-232633842.us-east-2.elb.amazonaws.com/charge"; // site that doesn’t send Access-Control-*
//const url = "http://localhost:8090/charge"; // site that doesn’t send Access-Control-*


export default class Payment extends React.Component {
    constructor(props){
        super();
        this.state={redirect : false};
        console.log("Payment Props");
        console.log(props);
    }

    onToken = (token) => {
        console.log(url, {method: 'POST', 
                            headers: {'token': token,
                                        'amount': this.props.cost},
                            body: JSON.stringify(token)});
        fetch(url, {
            method: 'POST',
            headers: {'token': JSON.stringify(token),
                        'amount': this.props.cost},
        }).then(response => {
            response.json().then(data => {
                //window.location.href = "http://utopia-airline.s3-website.us-east-2.amazonaws.com/#/";
                if(response.status === 200){
                    alert(`Enjoy your flight, ${data.source.name}`);
                    fetch("http://ansible-spring-lb-232633842.us-east-2.elb.amazonaws.com/utopia/booking/paid", {
                        method: 'PUT',
                        headers: {'bookingId': this.props.bookingId}
                    })
                    this.setRedirect();
                }
                else{
                    alert('Payment failed to be processed');
                }
            });
        });
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }
  
    render() {
        return (
            <div>
                {this.renderRedirect()}
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
            </div>
        )
    }
  }
