import axios from 'axios';
import {GET_AIRPORTS_SUCCESS, GET_FLIGHTS_SUCCESS, GET_FLIGHTS_PENDING, POST_BOOKING_SUCCESS, GET_ERRORS, GET_BOOKING_SUCCESS, GET_TICKETS_SUCCESS, GET_AIRPORTS_PENDING, GET_TICKETS_PENDING, GET_BOOKING_PENDING} from './types';
import { display } from '@material-ui/system';

const instance = axios.create({baseURL: 'https://ma35v84odj.execute-api.us-east-2.amazonaws.com/dev'});

export const getAirports = () => dispatch => {
    dispatch({
        type: GET_AIRPORTS_PENDING,
    });

    instance
        .get('/airport')
        .then(resolve => {
            dispatch({
                type:GET_AIRPORTS_SUCCESS,
                payload: resolve.data});
            })
        .catch(reject =>{
            console.log("NO AIRPORTS FOUND:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

export const getFlightsByAirports = (srcAirportCode, destAirportCode) => dispatch => {
    dispatch({
        type: GET_FLIGHTS_PENDING,
    });

    instance
        .get(`/flight/${srcAirportCode}/to/${destAirportCode}`)
        .then((resolve) => {
            dispatch({
                type:GET_FLIGHTS_SUCCESS,
                payload: resolve.data
            });
        })
        .catch((reject) => {
            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

export const getTicketsById = (bookingId) => dispatch => {
    dispatch({
        type: GET_TICKETS_PENDING,
    });

    instance
        .get(`/ticket/booking/${bookingId}`)
        .then((resolve) => {
            dispatch({
                type:GET_TICKETS_SUCCESS,
                payload: resolve.data
            });
        })
        .catch((reject) => {
            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

export const getBookingById = (bookingId) => dispatch => {
    dispatch({
        type: GET_BOOKING_PENDING
    });

    instance
        .get(`/booking/${bookingId}`)
        .then((resolve) => {
            dispatch({
                type:GET_BOOKING_SUCCESS,
                payload: resolve.data
            });
            console.log("booking found!")
            console.log(resolve.data)
        })
        .catch((reject) => {
            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

export const postBooking = (userId, flightId, ticketCount, ticketDate, ticketCost) => dispatch => {
    dispatch({
        type: POST_BOOKING_PENDING
    });
    
    instance.post('/booking', {userId, flightId, ticketCount, ticketCost, ticketDate})
        .then((resolve) => {
            console.log("post booking success :");
            console.log(resolve.data);
            dispatch({
                type: POST_BOOKING_SUCCESS,
                payload: resolve.data
            });
        })
        .catch((reject) => {
            console.log("post booking failed:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}