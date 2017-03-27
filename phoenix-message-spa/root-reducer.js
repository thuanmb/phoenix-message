import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import userReducer from './reducers/user-reducer';
import entities from './reducers/entities';
import appStateReducer from './reducers/app-state-reducer';

const rootReducer = combineReducers({
  routing,
  toastr,
  user: userReducer,
  entities,
  appState: appStateReducer,
});

export default rootReducer;
