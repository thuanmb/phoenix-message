const defaultState = {
  isLoading: true,
  byId: {},
  allIds: [],
};

export const REQUESTING_MESSAGE = 'REQUESTING_MESSAGE';
export const RECEIVE_MESSAGE_CREATED = 'RECEIVE_MESSAGE_CREATED';
export const ADD_WIDGET_INTO_MESSAGE = 'ADD_WIDGET_INTO_MESSAGE';

const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_MESSAGE_CREATED:
      const newProject = action.response.data;
      const id = newProject.message.id;

      return {
        ...state,
        isLoading: false,
        byId: {
          ...state.byId,
          [id]: {
            ...newProject.message,
            widgets: newProject.widgets,
          },
        },
        allIds: [
          ...state.allIds,
          id,
        ],
      };
    case ADD_WIDGET_INTO_MESSAGE:
      const { messageId, widgetId } = action;
      return {
        ...state,
        byId: {
          ...state.byId,
          [messageId]: {
            ...state.byId[messageId],
            widgets: [
              ...state.byId[messageId].widgets,
              widgetId,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default messagesReducer;
