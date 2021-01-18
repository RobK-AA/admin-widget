import { combineReducers } from 'redux';
import ClientsReducer from './clients_reducer';
import ErrorsReducer from './errors_reducer';
import SelectedClientReducer from './selected_client_reducer';
import LocationsReducer from './locations_reducer'

const RootReducer = combineReducers({
  clients: ClientsReducer,
  selectedClient: SelectedClientReducer,
  locations: LocationsReducer,
  errors: ErrorsReducer
});

export default RootReducer;