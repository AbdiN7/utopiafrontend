import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class FlightDate extends React.Component {
    // The first commit of Material-UI
    constructor(props){
        super(props)
        this.state = {
            selectedDate: new Date()
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }
  
    handleDateChange(event){
        console.log(event);
        this.setState({
            selectedDate: event,
        })
    };
    render(){
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        )
    };
}