import React from 'react';
import {TextField, Grid, MenuItem, Button, Select, InputLabel} from '@material-ui/core';


const PaymentForm = (props) => {

    const monthList = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const yearList = ['2019','2020','2021','2022','2023','2024','2025','2026','2027'];

    const [month, setMonth, year, setYear] = React.useState('');

    const handleMonthChange = event => {
        setMonth(event.target.value);
    };
    const handleYearChange = event => {
        setYear(event.target.value);
    };


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
                inputProps={{ maxLength: 16, type: 'tel'}}
                onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
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
                        inputProps={{ maxLength: 4, type: 'tel'}}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                    />
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={2}>
                        <InputLabel id="monthLabel">Month</InputLabel>
                        <Select
                            required
                            fullWidth
                            labelId="expMonth"
                            id="expMonth"
                            label="MM"
                            value={month}
                            onChange={handleMonthChange}
                            >
                            {monthList.map(option => (
                                <MenuItem value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* <TextField
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
                        </TextField> */}
                    </Grid>
                    <Grid item xs={2}>
                        <InputLabel id="monthLabel">Year</InputLabel>
                        <Select
                            labelId="expYear"
                            id="expYear"
                            Label="YYYY"
                            value={year}
                            onChange={handleYearChange}
                            >
                            {yearList.map(option => (
                                <MenuItem value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* <TextField
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
                        </TextField> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PaymentForm