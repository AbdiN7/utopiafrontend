import React from 'react';
import {TextField, Grid, Button, ButtonGroup } from '@material-ui/core';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Autocomplete } from '@material-ui/lab';
import {getAirports} from '../actions/bookingActions';

export default class PathForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            airports: [],
            dataRecieved: false
        };
    }

    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Button onClick={this.props.prevStep} className="formButtons">
                        Prev
                    </Button>
                </Grid>
    
                <Grid item xs ={6}/>
    
                <Grid item xs={3}>
                    <Button onClick={this.props.nextStep} className="formButtons">
                        Next
                    </Button>
                </Grid>
    
                <Grid item xs={9} >
                    <Autocomplete
                        id="srcAirport"
                        options={this.state.airports}
                        getOptionLabel={airport => airport.airportName}
                        renderInput={params => (
                            <TextField {...params} label="Source Airport" variant="outlined" fullWidth />
                        )}
                    />
                </Grid>
    
                <Grid item xs={3} >
                    <TextField
                        id="adultCount"
                        label="Adults"
                        type="number"
                        defaultValue="1"
                        className="textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </Grid>
    
                <Grid item xs={9}>
                    <Autocomplete
                        id="destAirport"
                        options={this.state.airports}
                        getOptionLabel={airport => airport.airportName}
                        renderInput={params => (
                            <TextField {...params} label="Destination Airport" variant="outlined" fullWidth/>
                        )}
                    />
                </Grid>
    
                <Grid item xs={3}>
                <TextField
                        id="childCount"
                        label="Children"
                        type="number"
                        defaultValue="0"
                        className="textField"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </Grid>
            </Grid>
        );
    };
    
}

