import isEmpty from '../validation/is-empty';
import {  GET_AIRPORTS_SUCCESS, GET_FLIGHTS_SUCCESS, POST_BOOKING_SUCCESS, POST_BOOKING_PENDING, GET_ERRORS } from '../actions/types';

const initialState = {
    isPending: false,
    airports: [],
    flights: [],
    postedBooking: {}
};
  
export default function(state = initialState, action) {
switch (action.type) {

    case GET_AIRPORTS_SUCCESS:
        return {
            ...state,
            airports: action.payload
        };
    case GET_FLIGHTS_SUCCESS:
        return {
            ...state,
            flights: action.payload
        };
    case POST_BOOKING_PENDING:
        return {
            ...state,
            isPending: true
        };
    case POST_BOOKING_SUCCESS:
        return {
            ...state,
            isPending: false,
            postedBooking: action.payload
        };
    case GET_ERRORS:
        return{
            ...state,
            isPending: false,
        }
    default:
        return state;
    }
}
  