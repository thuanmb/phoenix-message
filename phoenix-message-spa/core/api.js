export const fetch = (beforeAction, afterAction, options) => (dispatch) => {
  dispatch({
    type: beforeAction,
  });

  return $.ajax({
    ...options,
    contentType: 'application/json',
  }).then((response) => {
    if (response.status === 'OK') {
      dispatch({
        type: afterAction,
        response,
      });
    }
  });
};

