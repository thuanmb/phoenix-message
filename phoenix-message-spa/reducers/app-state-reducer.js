import { RECEIVE_MESSAGE_CREATED } from './messages-reducer';

export const UPDATE_CURRENT_MESSAGE_ID = 'UPDATE_CURRENT_MESSAGE_ID';

const defaultState = {};

const appStateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_MESSAGE_ID:
      return {
        ...state,
        currentMessageId: action.messageId,
      };

    case RECEIVE_MESSAGE_CREATED:
      return {
        ...state,
        currentMessageId: action.response.data.id,
      };

    default:
      return state;
  }
};

export default appStateReducer;
