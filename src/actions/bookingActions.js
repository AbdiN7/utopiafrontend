import axios from 'axios';
import {GET_AIRPORTS_SUCCESS, GET_FLIGHTS_SUCCESS, GET_ERRORS} from './types';

const instance = axios.create({baseURL: 'https://ma35v84odj.execute-api.us-east-2.amazonaws.com/dev'});

// get all airports
export const getAirports = () => dispatch => {
    instance
        .get('/airport')
        .then(resolve => {
            dispatch({
                type:GET_AIRPORTS_SUCCESS,
                payload: resolve.data});
            })
        .catch(err =>{
            console.log("NO AIRPORTS FOUND:");
            console.log(err);

            dispatch({
                type: GET_ERRORS,
                payload: err.data
            });
        });
}

export const getFlightsByAirports = (srcAirportCode, destAirportCode) => dispatch => {
    instance
        .get(`/flight/${srcAirportCode}/to/${destAirportCode}`)
        .then((resolve) => {
            dispatch({
                type:GET_FLIGHTS_SUCCESS,
                payload: resolve.data
            });
        })
        .catch((reject) => {
            console.log("NO FLIGHTS FOUND:");
            console.log(err);

            dispatch({
                type: GET_ERRORS,
                payload: err.data
            });
        });
}