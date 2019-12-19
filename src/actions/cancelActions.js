import axios from 'axios';
import {DELETE_TICKET_PENDING, DELETE_TICKET_SUCCESS, DELETE_BOOKING_PENDING, DELETE_BOOKING_SUCCESS, GET_TICKETS_BY_USER_SUCCESS, GET_TICKETS_BY_USER_PENDING, GET_BOOKINGS_BY_USER_SUCCESS, GET_ERRORS, GET_BOOKINGS_BY_USER_PENDING} from './types';

const instance = axios.create({baseURL: 'http://ansible-spring-lb-232633842.us-east-2.elb.amazonaws.com/utopia'});

export const getTicketsByUser = (userId) => dispatch => {
    dispatch({
        type: GET_TICKETS_BY_USER_PENDING,
    });

    instance
        .get(`/tickets/user/${userId}`)
        .then(resolve => {
            console.log("\n\nResolve");
            console.log(resolve)
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
        type: GET_BOOKINGS_BY_USER_PENDING,
    });

    instance
        .get(`/bookings/user/${userId}`)
        .then(resolve => {
            dispatch({
                type:GET_BOOKINGS_BY_USER_SUCCESS,
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

export const deleteBooking = (bookingId, userId) => dispatch => {
    dispatch({
        type: DELETE_BOOKING_PENDING,
    });

    instance
        .delete(`/booking/${bookingId}`)
        .then(res =>    
            instance
            .get(`/bookings/user/${userId}`)
            .then(resolve => {
                console.log(res);
                console.log("\n\nRESOLVE BOOKING\n");
                console.log(resolve);
                dispatch({
                    type: DELETE_BOOKING_SUCCESS,
                    payload: resolve.data
                });
            })
        )
        .catch(reject =>{
            console.log("Could Not Delete Booking:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}







export const deleteTicket = (ticketId, userId) => dispatch => {
    dispatch({
        type: DELETE_TICKET_PENDING,
    });

    instance
        .delete(`/ticket/${ticketId}`)
        .then(res=>         
            instance
            .get(`/tickets/user/${userId}`)
            .then(resolve => {
                console.log("\n\nRESOLVE TICKET\n");
                console.log(resolve);
                dispatch({
                    type: DELETE_TICKET_SUCCESS,
                    payload: resolve.data
                });
            })
        )
        .catch(reject =>{
            console.log("Could Not Delete Tickets:");
            console.log(reject);

            dispatch({
                type: GET_ERRORS,
                payload: reject.data
            });
        });
}