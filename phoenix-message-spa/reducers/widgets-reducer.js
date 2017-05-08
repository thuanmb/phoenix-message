import { normalize } from 'normalizr';
import { widget, ADD_WIDGET, UPDATE_WIDGET } from './types';

const defaultState = {
  byId: {},
  allIds: [],
};

const getCreateWidgetPayload = (type, payload) => ({
  asset_type: type,
  payload,
});

export const ASSET_TYPE = {
  TEXT: 'text',
  IMAGE: 'image',
  YOUTUBE: 'youtube',
};

export const DEFAULT_WIDGET = {
  TEXT: {
    asset_type: ASSET_TYPE.TEXT,
    payload: {
      content: 'Some text for your message',
    },
  },
  IMAGE: {
    asset_type: ASSET_TYPE.IMAGE,
    payload: {
      url: 'http://someurl.com',
    },
  },
  YOUTUBE: {
    asset_type: ASSET_TYPE.YOUTUBE,
    payload: {
      videoId: 'SOMEID',
    },
  },
};

export const getCreateTextWidgetPayload = (content) => getCreateWidgetPayload(ASSET_TYPE.TEXT, { content });
export const getCreateImageWidgetPayload = (url) => getCreateWidgetPayload(ASSET_TYPE.IMAGE, { url });
export const getCreateYouTubeWidgetPayload = (videoId) => getCreateWidgetPayload(ASSET_TYPE.YOUTUBE, { videoId });

export const getWidgetEntities = (data) => {
  const widgetsData = { widgets: data };
  const widgetsSchema = { widgets: [widget] };
  return normalize(widgetsData, widgetsSchema);
};

const widgetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      const normalizedWidgets = getWidgetEntities(action.payload);

      return {
        ...state,
        byId: {
          ...state.byId,
          ...normalizedWidgets.entities.widget,
        },
        allIds: [
          ...state.allIds,
          ...normalizedWidgets.result.widgets,
        ],
      };
    case UPDATE_WIDGET:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            asset: {
              ...state.byId[action.id].asset,
              payload: action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default widgetsReducer;
