import React from 'react';
import {TextField, Grid, Button, ButtonGroup } from '@material-ui/core';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Autocomplete } from '@material-ui/lab';
import {getAirports} from '../actions/bookingActions';
import axios from 'axios';

export default class PathForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            airports: []
        };

        this.findIt = this.findIt.bind(this);
    }

    findIt(){
        const it = this.state.airports.find(ele => ele.airportCode == this.props.values.destAirport)
        console.log("IT:");
        console.log(it);
        return it;
    }

    componentDidMount() {
        axios.get('https://5tg2w27q83.execute-api.us-east-1.amazonaws.com/dev/airport')
        .then((resolve) => {
            this.setState({airports: resolve.data});
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
    
                <Grid item xs={9}>
                    <Autocomplete
                        id="srcAirport"
                        name="srcAirport"
                        onChange={this.props.handleSrcAirportChange}
                        defaultValue={{airportCode: "AAA", airportName: "name1"}}
                        options={this.state.airports}
                        getOptionLabel={airport => airport.airportCode + ' - ' + airport.airportName}
                        renderInput={params => (
                            <TextField {...params} label="Source Airport" variant="outlined" fullWidth />
                        )}
                    />
                </Grid>
    
                <Grid item xs={3}>
                    <TextField
                        id="adultCount"
                        label="Adults"
                        type="number"
                        defaultValue={this.props.values.ticketCount}
                        className="textField"
                        onChange={this.props.handleTicketCountChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </Grid>
    
                <Grid item xs={9}>
                    <Autocomplete
                        id="destAirport"
                        name="destAirport"
                        onChange={this.props.handleDestAirportChange}
                        defaultValue={{airportCode: "BBB", airportName: "name2"}}
                        options={this.state.airports}
                        getOptionLabel={airport => airport.airportCode + ' - ' + airport.airportName}
                        renderInput={params => (
                            <TextField {...params} label="Destination Airport" variant="outlined" fullWidth/>
                        )}
                    />
                </Grid>
    
                <Grid item xs={3}/>
            </Grid>
        );
    };
    
}

// PathForm.propTypes = {
//     getAirports: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     errors: state.errors
// });

// export default connect(mapStateToProps, { getAirports })(PathForm);
