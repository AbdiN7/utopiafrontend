import axios from 'axios';
import {GET_TICKETS_BY_USER_SUCCESS, GET_TICKETS_BY_USER_PENDING, POST_BOOKING_BY_USER_SUCCESS, GET_ERRORS, GET_BOOKING_BY_USER_SUCCESS} from './types';

const instance = axios.create({baseURL: 'http://ansible-spring-lb-232633842.us-east-2.elb.amazonaws.com/utopia/'});

export const getTicketsByUser = (userId) => dispatch => {
    dispatch({
        type: GET_TICKETS_BY_USER_PENDING,
    });

    instance
        .get(`/tickets/user/${userId}`)
        .then(resolve => {
            dispatch({
                type:GET_TICKETS_BY_USER_SUCCESS,
                payload: resolve.data});
            })
        .catch(reject =>{
            console.log("NO TICKETS FOUND:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

export const getBookingsByUser = (userId) => dispatch => {
    dispatch({
        type: GET_TICKETS_BY_USER_PENDING,
    });

    instance
        .get(`/bookings/user/${userId}`)
        .then(resolve => {
            dispatch({
                type:GET_TICKETS_BY_USER_SUCCESS,
                payload: resolve.data});
            })
        .catch(reject =>{
            console.log("NO BOOKINGS FOUND:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}

// export const getFlightsByAirports = (srcAirportCode, destAirportCode) => dispatch => {
//     dispatch({
//         type: GET_FLIGHTS_PENDING,
//     });

//     instance
//         .get(`/flight/${srcAirportCode}/to/${destAirportCode}`)
//         .then((resolve) => {
//             dispatch({
//                 type:GET_FLIGHTS_SUCCESS,
//                 payload: resolve.data
//             });
//         })
//         .catch((reject) => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: reject.data
//             });
//         });
// }

// export const getTicketsById = (bookingId) => dispatch => {
//     dispatch({
//         type: GET_TICKETS_PENDING,
//     });

//     instance
//         .get(`/ticket/booking/${bookingId}`)
//         .then((resolve) => {
//             dispatch({
//                 type:GET_TICKETS_SUCCESS,
//                 payload: resolve.data
//             });
//         })
//         .catch((reject) => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: reject.data
//             });
//         });
// }

// export const getBookingById = (bookingId) => dispatch => {
//     dispatch({
//         type: GET_BOOKING_PENDING
//     });

//     instance
//         .get(`/booking/${bookingId}`)
//         .then((resolve) => {
//             dispatch({
//                 type:GET_BOOKING_SUCCESS,
//                 payload: resolve.data
//             });
//         })
//         .catch((reject) => {
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: reject.data
//             });
//         });
// }

// export const postBooking = (userId, flightId, ticketCount, ticketDate, ticketCost) => dispatch => {
//     dispatch({
//         type: POST_BOOKING_PENDING
//     });
    
//     instance.post('/booking', {userId, flightId, ticketCount, ticketCost, ticketDate})
//         .then((resolve) => {
//             console.log("post booking success :");
//             console.log(resolve.data);
//             dispatch({
//                 type: POST_BOOKING_SUCCESS,
//                 payload: resolve.data
//             });
//         })
//         .catch((reject) => {
//             console.log("post booking failed:");
//             console.log(reject);

//             dispatch({
//                 type: GET_ERRORS,
//                 payload: reject.data
//             });
//         });
// }