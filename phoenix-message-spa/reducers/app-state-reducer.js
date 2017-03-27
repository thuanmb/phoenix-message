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

    default:
      return state;
  }
};

export default appStateReducer;
