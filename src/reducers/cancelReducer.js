import isEmpty from '../validation/is-empty';
import {DELETE_TICKET_PENDING, DELETE_TICKET_SUCCESS, DELETE_BOOKING_PENDING, DELETE_BOOKING_SUCCESS,
    GET_TICKETS_BY_USER_SUCCESS, GET_TICKETS_BY_USER_PENDING, GET_BOOKINGS_BY_USER_SUCCESS, GET_ERRORS, GET_BOOKINGS_BY_USER_PENDING} from  '../actions/types';

const initialState = {
    isPending: true,
    tickets: [],
    postedBooking: {},
    bookings: []
};
  
export default function(state = initialState, action) {

    switch (action.type) {
        case DELETE_TICKET_SUCCESS:
            return {
                ...state,
                isPending: false,
                tickets: action.payload
            };

        case DELETE_TICKET_PENDING:
            return {
                ...state,
                isPending: true,
            };

        case DELETE_BOOKING_PENDING:
            return {
                ...state,
                isPending: true,
            };

        case DELETE_BOOKING_SUCCESS:
            return {
                ...state,
                isPending: false,
                bookings: action.payload
            };

        case GET_TICKETS_BY_USER_SUCCESS:
            return {
                ...state,
                isPending: false,
                tickets: action.payload
            };
        
        case GET_TICKETS_BY_USER_PENDING:
            return {
                ...state,
                isPending: true
            };
        
        case GET_BOOKINGS_BY_USER_SUCCESS:
            return {
                ...state,
                isPending: false,
                bookings: action.payload
            };

        case GET_BOOKINGS_BY_USER_PENDING:
            return {
                ...state,
                isPending: true
            };

        // ERROR
        case GET_ERRORS:
            return{
                ...state,
                isPending: false,
            }
        default:
            return state;
    }
}
