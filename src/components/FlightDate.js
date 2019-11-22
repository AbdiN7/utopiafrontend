import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';


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
                        className={'textField'}
                        InputProps={{className: 'textField'}}
                        color="#EEEEEE"
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
                  <Button
            onClick={this.props.prevStep}>
                    Prev
              </Button>
                  <Button
            onClick={this.props.nextStep}>
                    Next
                  </Button>
                </Grid>

            </MuiPickersUtilsProvider>
        )
    };
}
