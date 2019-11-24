import React from 'react';
import {TextField, Grid} from '@material-ui/core';

const PaymentForm = () => {
    return (
        <Grid container id="PaymentForm" spacing={3}>
            <Grid item xs={9}>
                <TextField
                required
                fullWidth
                id="nameOnCard"
                name="nameOnCard"
                label="Cardholder Name"
                />
            </Grid>
            <Grid item xs={3}>
            <TextField
                required
                fullWidth
                id="cvv"
                name="cvv"
                label="CVV"
            />
            </Grid>
            <Grid item xs={9}>
            <TextField
                required
                fullWidth
                id="cardNum"
                name="cardNum"
                label="Card Number"
            />
            </Grid>
            <Grid item xs={3}>
                <Grid container id="dateForm" spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="expMonth"
                            name="expMonth"
                            label="MM"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            id="expYear"
                            name="expYear"
                            label="YYYY"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PaymentForm