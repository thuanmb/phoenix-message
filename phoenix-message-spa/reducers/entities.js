import { combineReducers } from 'redux';
import widgetsReducer from './widgets-reducer';
import messagesReducer from './messages-reducer';

const entities = combineReducers({
  widgets: widgetsReducer,
  messages: messagesReducer,
});

export default entities;
