import 'date-fns';
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const FlightDate = (props) => {
    const [selectedDate, handleDateChange] = useState(props.values.ticketDate);

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={3}>

                <Grid item xs ={9}/>

                <Grid item xs={3}>
                    <Button onClick={props.nextStep} className="formButtons">
                        Next
                    </Button>
                </Grid>
            </Grid>
            <Grid container justify="space-around" className="flightDateContainer">
                <Grid item xs={12}>
                    <Typography style={{display: 'inline-block'}}>
                        Select a Departure date
                    </Typography>
                </Grid>

                <Grid item  xs={12}>
                    <KeyboardDatePicker
                        disableToolbar
                        name="ticketDate"
                        variant="inline"
                        label="From"
                        format="MM-dd-yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={props.values.ticketDate}
                        onChange={props.handleTicketDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

export default FlightDate;