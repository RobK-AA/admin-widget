import { RECEIVE_CLIENT } from '../actions/client_actions';

const SelectedClientReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CLIENT:
        return action.client;
    default:
        return oldState;
  }
};

export default SelectedClientReducer;