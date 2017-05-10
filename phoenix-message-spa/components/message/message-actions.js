import { UPDATE_CURRENT_MESSAGE_ID } from 'ReducersPath/app-state-reducer';
import { REQUESTING_MESSAGE, RECEIVE_MESSAGE_CREATED, ADD_WIDGET_INTO_MESSAGE } from 'ReducersPath/messages-reducer';
import { DEFAULT_WIDGET, getCreateTextWidgetPayload } from 'ReducersPath/widgets-reducer';
import { createMessage, createWidget, getMessage, createSharedMessage } from 'CorePath/api';
import { history } from 'CorePath/store';
import routes from 'CorePath/routes';
import {
  ADD_WIDGET,
  REQUEST_CREATE_SHARED_MESSAGE,
  RECEIVE_CREATE_SHARED_MESSAGE,
} from 'ReducersPath/types';

export const updateCurrentMessageId = (messageId) => ({
  type: UPDATE_CURRENT_MESSAGE_ID,
  messageId,
});

export const dispatchAddingMessage = (messageId, widgets, dispatch) => {
  dispatch({
    type: ADD_WIDGET,
    payload: widgets,
  });

  dispatch({
    type: RECEIVE_MESSAGE_CREATED,
    response: {
      data: {
        id: messageId,
        widgets: widgets.map((widget) => widget.id),
      },
    },
  });
};

export const createNewMessage = () => (dispatch) => {
  dispatch({
    type: REQUESTING_MESSAGE,
  });

  createMessage().done(({ data: messageData }) => {
    const messageId = messageData.id;
    createWidget(messageId, DEFAULT_WIDGET.TEXT).done(({ data }) => {
      dispatchAddingMessage(messageId, [data], dispatch);
      history.push(routes.paths.createMessage.getUrl({ id: messageId }));
    });
  });
};

export const fetchMessage = (id) => (dispatch) => {
  dispatch({
    type: REQUESTING_MESSAGE,
  });

  getMessage(id).then(({ data: { widgets } }) => dispatchAddingMessage(id, widgets, dispatch));
};

export const addTextToMessage = (messageId, text) => (dispatch) => {
  createWidget(messageId, getCreateTextWidgetPayload(text)).done(({ data }) => {
    dispatch({
      type: ADD_WIDGET,
      payload: [data],
    });

    dispatch({
      type: ADD_WIDGET_INTO_MESSAGE,
      messageId,
      widgetId: data.id,
    });
  });
};

export const addImageToMessage = (messageId, url) => {
  window.console.log(messageId, url);
};

export const addYoutubeToMessage = (messageId, videoId) => {
  window.console.log(messageId, videoId);
};

export const publishMessage = (messageId) => (dispatch) => {
  dispatch({
    type: REQUEST_CREATE_SHARED_MESSAGE,
  });

  createSharedMessage(messageId).done((response) => dispatch({
    type: RECEIVE_CREATE_SHARED_MESSAGE,
    url: response.data,
  }));
};
