import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, SET_GUEST_ID, SET_GUEST_PENDING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  guestIdPending: true,
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
        guestIdPending: false,
        guestId: action.payload
      }
    default:
      return state;
  }
}
