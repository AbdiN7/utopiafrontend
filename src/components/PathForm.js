"use strict"

import React from 'react';
import {TextField, Grid, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

const PathForm = (props) => {

    let airports = 
    [{
        "airportId": 1,
        "airportName": "(LGA) Laguardia",
        "city": "NYC",
        "zip": "64291"
    },
    {
        "airportId": 2,
        "airportName": "(JFK) John F. Kennedy",
        "city": "NYC",
        "zip": "01854"
    }];

    return(
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={9} alignItems="center">
                <Autocomplete
                    id="srcAirport"
                    options={airports}
                    getOptionLabel={airport => airport.airportName}
                    renderInput={params => (
                        <TextField {...params} label="Source Airport" variant="outlined" fullWidth />
                    )}
                />
            </Grid>

            <Grid item xs={3} alignItems="right">
                <TextField
                    id="adultCount"
                    label="Adults"
                    type="number"
                    defaultValue="1"
                    style = {{width:"100%"}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </Grid>

            <Grid item xs={9}>
                <Autocomplete
                    id="destAirport"
                    options={airports}
                    getOptionLabel={airport => airport.airportName}
                    renderInput={params => (
                        <TextField {...params} label="Destination Airport" variant="outlined" fullWidth />
                    )}
                />
            </Grid>

            <Grid item xs={3}>
            <TextField
                    id="childCount"
                    label="Children"
                    type="number"
                    defaultValue="0"
                    style = {{width:"100%"}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </Grid>
          <Button onClick={props.prevStep}>
            Prev
          </Button>
        </Grid>
    );
}

export default PathForm
