import { getMessages } from 'CorePath/api';
import {
  REQUEST_MESSAGE_LIST,
  RECEIVE_MESSAGE_LIST,
} from 'ReducersPath/types';

import { dispatchAddingMessage } from '../message/message-actions';

export const fetchMessages = () => (dispatch) => {
  dispatch({
    type: REQUEST_MESSAGE_LIST,
  });

  getMessages().done((response) => {
    const {
      data: messages,
    } = response;

    messages.forEach((message) => dispatchAddingMessage(message, message.widgets, dispatch));

    dispatch({
      type: RECEIVE_MESSAGE_LIST,
      payload: response.data,
    });
  });
};
