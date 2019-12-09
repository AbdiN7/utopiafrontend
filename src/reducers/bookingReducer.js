import isEmpty from '../validation/is-empty';
import {  GET_AIRPORTS_SUCCESS, GET_FLIGHTS_SUCCESS } from '../actions/types';

const initialState = {
    airports: [],
    flights: []
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
    default:
        return state;
    }
}
  