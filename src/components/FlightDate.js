import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Typography } from '@material-ui/core';

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
        console.log(this.props)

        this.setState({
            selectedDate: event,
        })
    };
    render(){
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className="flightDateContainer">
                    <Grid item xs={12}>
                    <Typography style={{display: 'inline-block'}}>
                        Select a Departure date
                    </Typography>
                    </Grid>
                   <Grid item  xs={12}>
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
                    <Grid item>
                    <ButtonGroup>
                    
                    <Button
                      onClick={this.props.prevStep}
                      >
                          Prev
                    </Button>
                    <Button
                      onClick={this.props.nextStep}
                      >
                          Next
                    </Button>
                  </ButtonGroup>
                    </Grid>
               
                   </Grid>
                   

                </Grid>

            </MuiPickersUtilsProvider>
        )
    };
}
