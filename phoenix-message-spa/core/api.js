import { ApiUrls } from './api-urls';


const getActionTypes = (actions, payload) => (
  actions instanceof Array ?
    actions.map((action) => ({ type: action, ...payload }))
    : { type: actions, ...payload }
);

export const fetchDispatcher = (beforeAction, afterAction, url) => (dispatch) => {
  const beforeActionTypes = getActionTypes(beforeAction);
  dispatch(beforeActionTypes);

  return $.ajax({
    url,
    type: 'GET',
    contentType: 'application/json',
  }).then((response) => {
    if (response.status === 'OK') {
      const afterActionTypes = getActionTypes(afterAction, { response });
      dispatch(afterActionTypes);
    }
  });
};

export const putDispatcher = (beforeAction, afterAction, url, params) => (dispatch) => {
  const beforeActionTypes = getActionTypes(beforeAction);
  dispatch(beforeActionTypes);

  return $.ajax({
    url,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(params),
  }).then((response) => {
    if (response.status === 'OK') {
      const afterActionTypes = getActionTypes(afterAction, { response });
      dispatch(afterActionTypes);
    }
  });
};

export const createMessage = () => (
  $.ajax({
    url: ApiUrls.Messages,
    type: 'POST',
    contentType: 'application/json',
  })
);

export const getMessage = (id) => (
  $.ajax({
    url: ApiUrls.ShowMessage.getUrl({ id }),
    type: 'GET',
    contentType: 'application/json',
  })
);

export const createWidget = (messageId, widget) => (
  $.ajax({
    url: ApiUrls.Widgets,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      message_id: messageId,
      widget,
    }),
  })
);

export const updateWidgetAjax = (widgetId, payload) => (
  $.ajax({
    url: ApiUrls.UpdateWidgets.getUrl({ id: widgetId }),
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({
      payload,
    }),
  })
);
