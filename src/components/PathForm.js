"use strict"

import React from 'react';
import {TextField, Grid, Button, ButtonGroup, createMuiTheme } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

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

    const myTheme = createMuiTheme({
        overrides:{
            MuiAutocomplete:{
                focused:{
                    color:'#EEEEEE'
                }
            }
        }
    })

    return(
        <Grid container spacing={3} >
            <Grid item xs={9} >
                <Autocomplete
                    theme={myTheme}
                    id="srcAirport"
                    options={airports}
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
                        <TextField {...params} label="Destination Airport" variant="outlined" fullWidth/>
                    )}
                />
            </Grid>

            <Grid item xs={3}/>
        <ButtonGroup>
            <Button onClick={props.prevStep}>
                Prev
            </Button>
            <Button onClick={props.nextStep}>
                Next
            </Button>
        </ButtonGroup>
         
        </Grid>
    );
}

export default PathForm
