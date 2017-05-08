import { UPDATE_WIDGET } from 'ReducersPath/types';

export const updateWidget = (id, payload) => ({
  type: UPDATE_WIDGET,
  id,
  payload,
});
