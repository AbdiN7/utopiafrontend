import isEmpty from '../validation/is-empty';
import { GET_AIRPORTS_SUCCESS, GET_FLIGHTS_SUCCESS, POST_BOOKING_SUCCESS, GET_BOOKING_SUCCESS, GET_ERRORS, GET_TICKETS_SUCCESS, GET_FLIGHTS_PENDING, GET_AIRPORTS_PENDING, POST_BOOKING_PENDING, GET_BOOKING_PENDING, GET_TICKETS_PENDING } from '../actions/types';

const initialState = {
    isPending: false,
    airports: [],
    flights: [],
    tickets: [],
    postedBooking: {},
    booking: {}
};
  
export default function(state = initialState, action) {

    switch (action.type) {
        // GET AIRPORTS
        case GET_AIRPORTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                airports: action.payload
            };
        case GET_AIRPORTS_PENDING:
            return {
                ...state,
                isPending: true
            };

        // GET FLIGHTS
        case GET_FLIGHTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                flights: action.payload
            };
        case GET_FLIGHTS_PENDING:
            return {
                ...state,
                isPending: true
            };
        
        // POST BOOKING
        case POST_BOOKING_SUCCESS:
            return {
                ...state,
                isPending: false,
                postedBooking: action.payload
            };
        case POST_BOOKING_PENDING:
            return {
                ...state,
                isPending: true
            };
        
        // GET BOOKING
        case GET_BOOKING_SUCCESS:
            return {
                ...state,
                isPending: false,
                booking: action.payload
            };
        case GET_BOOKING_PENDING:
            return {
                ...state,
                isPending: true
            };

        // GET TICKETS
        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                isPending: false,
                tickets: action.payload
            };
        case GET_TICKETS_PENDING:
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
