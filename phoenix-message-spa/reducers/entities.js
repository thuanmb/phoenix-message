import { combineReducers } from 'redux';
import widgetsReducer from './widgets-reducer';
import projectsReducer from './projects-reducer';

const entities = combineReducers({
  widgets: widgetsReducer,
  projects: projectsReducer,
});

export default entities;
