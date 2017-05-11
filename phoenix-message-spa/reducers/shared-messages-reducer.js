import {
  REQUEST_SHOW_SHARED_MESSAGE,
  RECEIVE_SHOW_SHARED_MESSAGE,
} from './types';

const defaultState = {
  isLoading: true,
  content: {},
};


const sharedMessagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_SHOW_SHARED_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_SHOW_SHARED_MESSAGE:
      const data = action.response.data;

      return {
        ...state,
        isLoading: false,
        content: data,
      };
    default:
      return state;
  }
};

export default sharedMessagesReducer;
