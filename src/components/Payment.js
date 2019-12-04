
/**
* Use the CSS tab above to style your Element's container.
*/
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://localhost:8090/charge"; // site that doesn’t send Access-Control-*
//const url = "http://albua-1112387281.us-east-2.elb.amazonaws.com:8090/charge";
// fetch(proxyurl + url)
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

export default class Payment extends React.Component {
    constructor(props){
        super();
        console.log("Payment props");
        console.log(props);
        this.state=props;
    }

    onToken = (token) => {
        console.log(JSON.stringify(token));
        fetch(url, {
            method: 'POST',
            headers: {'token': JSON.stringify(token),
                        'amount': 250},
        }).then(response => {
            response.json().then(data => {
                console.log(this.state);
                window.location.href = "http://localhost:3000/#/";
                alert(`Enjoy your flight, ${data.source.name}`);
            });
        });
    }
  
    render() {
      return (
        <StripeCheckout
            stripeKey="pk_test_OIWeWKfTkuN2DuNcic60fqAi00CjwhKqQn"
            amount='25000'
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
