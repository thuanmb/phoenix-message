import { UPDATE_WIDGET, REMOVE_WIDGET } from 'ReducersPath/types';

export const updateWidget = (id, payload) => ({
  type: UPDATE_WIDGET,
  id,
  payload,
});

export const removeWidget = (id) => ({
  type: REMOVE_WIDGET,
  id,
});
