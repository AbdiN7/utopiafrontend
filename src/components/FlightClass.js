import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


var useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
var classes = useStyles();

export default class FlightForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            class: 'Business',
            date: '',
        }
    }

    handleClassChange(event) {
        console.log(event.target.value);
        this.setState({
          class: event.target.value,
          date: this.state.date
        });
    };

    render(){
        return(
            <FormControl className={classes}>
            <InputLabel htmlFor="class-native-required">Seating Class</InputLabel>
            <Select
            native
            value={this.state.class}
            onChange={this.handleClassChange}
            class="class"
            inputProps={{
                id: 'class-native-required',
            }}
            >
            <option value="" />
            <option value={'Basic Economy'}>Basic Economy</option>
            <option value={'Economy'}>Economy</option>
            <option value={'Business'}>Business</option>
            <option value={'First Class'}>First Class</option>
            </Select>
        </FormControl>
        )
    }
}