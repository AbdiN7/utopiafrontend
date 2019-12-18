import isEmpty from '../validation/is-empty';
import {GET_TICKETS_BY_USER_SUCCESS, GET_TICKETS_BY_USER_PENDING, GET_BOOKINGS_BY_USER_SUCCESS, GET_ERRORS, GET_BOOKINGS_BY_USER_PENDING} from  '../actions/types';

const initialState = {
    isPending: true,
    tickets: [],
    postedBooking: {},
    bookings: []
};
  
export default function(state = initialState, action) {
    console.log("\n\nTICKETS1");
    console.log(state.tickets);

    switch (action.type) {
        // GET AIRPORTS
        case GET_TICKETS_BY_USER_SUCCESS:
            console.log("\n\nTICKETS2");
            console.log(state.tickets);
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
