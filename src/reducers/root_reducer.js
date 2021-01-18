import { combineReducers } from 'redux';
import ClientsReducer from './clients_reducer';
import ErrorsReducer from './errors_reducer';
import SelectedClientReducer from './selected_client_reducer';

const RootReducer = combineReducers({
  clients: ClientsReducer,
  selectedClient: SelectedClientReducer,
  errors: ErrorsReducer
});

export default RootReducer;