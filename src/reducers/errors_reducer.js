import { RECEIVE_CLIENT_ERRORS } from '../actions/client_actions';
import { RECEIVE_LOCATION_ERRORS } from '../actions/location_actions';

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CLIENT_ERRORS:
      return action.errors || [];
    case RECEIVE_LOCATION_ERRORS:
      return action.errors || [];
    // case CLEAR_ERRORS:
    //   return [];
    default:
      return oldState;
  }
};

export default ErrorsReducer;