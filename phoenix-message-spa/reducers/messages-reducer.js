const defaultState = {
  isLoading: true,
  byId: {},
  allIds: [],
};

export const REQUESTING_MESSAGE = 'REQUESTING_MESSAGE';
export const RECEIVE_MESSAGE_CREATED = 'RECEIVE_MESSAGE_CREATED';

const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_MESSAGE_CREATED:
      const newProject = action.response.data;

      return {
        ...state,
        isLoading: false,
        byId: {
          ...state.byId,
          [newProject.id]: newProject,
        },
        allIds: [
          ...state.allIds,
          newProject.id,
        ],
      };
    default:
      return state;
  }
};

export default messagesReducer;
