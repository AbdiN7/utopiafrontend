import React from 'react';
import {TextField, Grid, MenuItem, Button} from '@material-ui/core';


const PaymentForm = (props) => {

    const monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
    const yearList = [2019,2020,2021,2022,2023,2024,2025,2026,2027];

    return (
        <Grid container id="PaymentForm" spacing={3}>
            <Grid item xs={3}>
                <Button onClick={props.prevStep} className="formButtons">
                    Prev
                </Button>
            </Grid>

            <Grid item xs ={6}/>

            <Grid item xs={3}>
                <Button onClick={props.nextStep} className="formButtons">
                    Submit
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="nameOnCard"
                name="nameOnCard"
                label="Cardholder Name"
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                fullWidth
                id="cardNum"
                name="cardNum"
                label="Card Number"
            />
            </Grid>
            <Grid item xs={12}>
                <Grid container id="dateForm" spacing={3}>
                    <Grid item xs={2}>
                    <TextField
                        required
                        fullWidth
                        id="cvv"
                        name="cvv"
                        label="CVV"
                        maxLength="4"
                    />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={2}>
                        <TextField
                            required
                            fullWidth
                            id="expMonth"
                            name="expMonth"
                            label="MM"
                            select
                            value=''
                        >
                            {monthList.map(option => (
                                <MenuItem value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            required
                            fullWidth
                            id="expYear"
                            name="expYear"
                            label="YYYY"
                            select
                            value=''
                        >
                            {yearList.map(option => (
                                <MenuItem value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PaymentForm