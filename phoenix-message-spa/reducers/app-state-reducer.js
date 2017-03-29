import { RECEIVE_MESSAGE_CREATED } from './projects-reducer';

export const UPDATE_CURRENT_PROJECT = 'UPDATE_CURRENT_PROJECT';

const defaultState = {
  currentProject: 1,
};

const appStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.projectId,
      };

    case RECEIVE_MESSAGE_CREATED:
      return {
        ...state,
        currentProject: action.response.data.id,
      };

    default:
      return state;
  }
};

export default appStateReducer;
