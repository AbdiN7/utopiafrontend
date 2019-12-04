import axios from 'axios';
import {GET_AIRPORTS, GET_ERRORS} from './types';

const instance = axios.create({baseURL: 'https://w1714otaj1.execute-api.us-east-1.amazonaws.com/dev'});

// get all airports
export const getAirports = () => dispatch => {
    instance
        .get('/airport')
        .then(resolve => {
            console.log("RESOLVE DATA:\n" + resolve.data);
            dispatch({
                type:GET_AIRPORTS,
                payload: resolve.data});
        })
        .catch(err =>{
            dispatch({
                type: GET_ERRORS,
                payload: err.data
            });
            console.log("NO AIRPORTS FOUND" + err);
        });
}