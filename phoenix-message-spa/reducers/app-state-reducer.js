import { RECEIVE_MESSAGE_CREATED } from './messages-reducer';
import {
  REQUEST_CREATE_SHARED_MESSAGE,
  RECEIVE_CREATE_SHARED_MESSAGE,
} from './types';

export const UPDATE_CURRENT_MESSAGE_ID = 'UPDATE_CURRENT_MESSAGE_ID';

const defaultState = {
  sharedMessage: {
    isLoading: false,
    url: '',
  },
};

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

    case REQUEST_CREATE_SHARED_MESSAGE:
      return {
        ...state,
        sharedMessage: {
          ...state.sharedMessage,
          isLoading: true,
        },
      };

    case RECEIVE_CREATE_SHARED_MESSAGE:
      return {
        ...state,
        sharedMessage: {
          ...state.sharedMessage,
          isLoading: false,
          url: action.url,
        },
      };

    default:
      return state;
  }
};

export default appStateReducer;
