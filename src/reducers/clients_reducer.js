import { RECEIVE_CLIENTS } from '../actions/client_actions';

const ClientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CLIENTS:
        return action.clients;
    default:
        return oldState;
  }
};

export default ClientsReducer;