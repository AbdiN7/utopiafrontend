import React from 'react';
import {TextField, Grid, Button, ButtonGroup } from '@material-ui/core';
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

    return(
        <Grid container spacing={3} >
            <Grid item xs={3}>
                <Button onClick={props.prevStep}>
                    Prev
                </Button>
            </Grid>

            <Grid item xs ={6}/>

            <Grid item xs={3}>
                <Button onClick={props.nextStep}>
                    Next
                </Button>
            </Grid>

            <Grid item xs={9} >
                <Autocomplete
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
                    options={airports}
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
            <ButtonGroup>
                <Button onClick={props.prevStep} className="formButtons">
                    Prev
                </Button>
                <Button onClick={props.nextStep} className="formButtons">
                    Next
                </Button>
            </ButtonGroup>
        </Grid>
    );
}

export default PathForm
