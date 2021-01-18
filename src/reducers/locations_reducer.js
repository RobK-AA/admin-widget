import { RECEIVE_CLIENTS } from '../actions/client_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

const LocationsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = [...oldState] || [];
  switch(action.type) {
    case RECEIVE_LOCATION:
        newState.push(action.location);
        return newState;
    default:
        return oldState;
  }
};

export default LocationsReducer;