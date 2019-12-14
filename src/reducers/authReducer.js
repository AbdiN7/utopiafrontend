import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, SET_GUEST_ID } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  guestId: 0,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_GUEST_ID:
      return {
        ...state,
        guestId: action.payload
      }
    default:
      return state;
  }
}
