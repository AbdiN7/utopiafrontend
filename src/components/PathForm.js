import React from 'react';
import {TextField, Grid, Button, ButtonGroup } from '@material-ui/core';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Autocomplete } from '@material-ui/lab';
import {getAirports} from '../actions/bookingActions';
import axios from 'axios';

class PathForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            airports: this.props.getAirports()
        };
    }

    componentDidMount() {
        axios.get('https://w1714otaj1.execute-api.us-east-1.amazonaws.com/dev/airport')
        .then((resolve) => {
            this.setState({airports: resolve.data});
            console.log("AIRPORTS STATE IN MOUNT" + this.state.airports)
        });
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
                        getOptionLabel={airport => '(' + airport.airportCode + ') ' + airport.airportName}
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
                        getOptionLabel={airport => '(' + airport.airportCode + ') ' + airport.airportName}
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

PathForm.propTypes = {
    getAirports: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { getAirports })(PathForm);
