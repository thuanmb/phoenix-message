import { UPDATE_CURRENT_MESSAGE_ID } from 'ReducersPath/app-state-reducer';
import { REQUESTING_MESSAGE, RECEIVE_MESSAGE_CREATED, ADD_WIDGET_INTO_MESSAGE } from 'ReducersPath/messages-reducer';
import { createMessage, createWidget, fetchDispatcher, getMessage, createSharedMessage } from 'CorePath/api';
import { ApiUrls } from 'CorePath/api-urls';
import { history } from 'CorePath/store';
import routes from 'CorePath/routes';
import {
  ADD_WIDGET,
  REQUEST_CREATE_SHARED_MESSAGE,
  RECEIVE_CREATE_SHARED_MESSAGE,
  REQUEST_SHOW_SHARED_MESSAGE,
  RECEIVE_SHOW_SHARED_MESSAGE,
  REMOVE_WIDGET_FROM_MESSAGE,
} from 'ReducersPath/types';

import {
  DEFAULT_WIDGET,
  getCreateTextWidgetPayload,
  getCreateImageWidgetPayload,
  getCreateYouTubeWidgetPayload,
} from 'ReducersPath/widgets-reducer';

export const updateCurrentMessageId = (messageId) => ({
  type: UPDATE_CURRENT_MESSAGE_ID,
  messageId,
});

export const dispatchAddingMessage = (message, widgets, dispatch) => {
  dispatch({
    type: ADD_WIDGET,
    payload: widgets,
  });

  dispatch({
    type: RECEIVE_MESSAGE_CREATED,
    response: {
      data: {
        message,
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
      dispatchAddingMessage({
        id: messageId,
        shared: false,
        createdAt: new Date(),
      }, [data], dispatch);
      history.push(routes.paths.createMessage.getUrl({ id: messageId }));
    });
  });
};

export const fetchMessage = (id) => (dispatch) => {
  dispatch({
    type: REQUESTING_MESSAGE,
  });

  getMessage(id).then(({ data }) => dispatchAddingMessage(data, data.widgets, dispatch));
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

export const addImageToMessage = (messageId, url) => (dispatch) => {
  createWidget(messageId, getCreateImageWidgetPayload(url)).done(({ data }) => {
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

export const addYoutubeToMessage = (messageId, videoId) => (dispatch) => {
  createWidget(messageId, getCreateYouTubeWidgetPayload(videoId)).done(({ data }) => {
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

export const publishMessage = (messageId) => (dispatch) => {
  dispatch({
    type: REQUEST_CREATE_SHARED_MESSAGE,
  });

  createSharedMessage(messageId).done((response) => dispatch({
    type: RECEIVE_CREATE_SHARED_MESSAGE,
    url: response.data,
  }));
};

export const fetchSharedMessage = (token) => (dispatch) => (
  fetchDispatcher(
    REQUEST_SHOW_SHARED_MESSAGE,
    RECEIVE_SHOW_SHARED_MESSAGE,
    ApiUrls.ShowSharedMessages.getUrl({ token }),
  )(dispatch)
);

export const removeWidgetFromMessage = (messageId, widgetId) => ({
  type: REMOVE_WIDGET_FROM_MESSAGE,
  messageId,
  widgetId,
});
