import isEmpty from '../validation/is-empty';
import { GET_AIRPORTS } from '../actions/types';

const initialState = {
    airportList: [],
};
  
export default function(state = initialState, action) {
switch (action.type) {
    case GET_AIRPORTS:
        return {
            ...state,
            airportList: action.payload
        };
    default:
    return state;
    }
}
  