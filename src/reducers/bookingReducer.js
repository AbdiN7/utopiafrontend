import isEmpty from '../validation/is-empty';
import { GET_AIRPORTS } from '../actions/types';

const initialState = {
    airports: [],
};
  
export default function(state = initialState, action) {
switch (action.type) {
    case GET_AIRPORTS:
        return {
            ...state,
            airports: action.payload
        };
    default:
        return state;
    }
}
  