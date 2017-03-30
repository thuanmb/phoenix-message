const defaultState = {
  byId: {
    1: {
      id: 1,
      widgets: [
        {
          widgetId: 1,
          properties: {
            content: 'This is some text',
          },
        },
        {
          widgetId: 2,
          properties: {
            url: 'http://sampleurl.png',
          },
        },
        {
          widgetId: 3,
          properties: {
            videoId: 't7vSqJ_2n20',
          },
        },
      ],
    },
    2: {
      id: 2,
      widgets: [
        {
          widgetId: 1,
          properties: {
            content: 'This is some text 2',
          },
        },
        {
          widgetId: 2,
          properties: {
            url: 'http://sampleurl2.png',
          },
        },
        {
          widgetId: 3,
          properties: {
            videoId: 't7vSqJ_2n20',
          },
        },
      ],
    },
  },
  allIds: [1, 2, 3],
};

const getNextStateForAddingWidget = (state, projectId, widgetId, propName, data) => ({
  ...state,
  byId: {
    ...state.byId,
    [projectId]: {
      ...state.byId[projectId],
      widgets: [
        ...state.byId[projectId].widgets,
        {
          widgetId,
          properties: {
            [propName]: data,
          },
        },
      ],
    },
  },
});

export const REQUEST_CREATE_MESSAGE = 'REQUEST_CREATE_MESSAGE';
export const RECEIVE_MESSAGE_CREATED = 'RECEIVE_MESSAGE_CREATED';
export const ADD_TEXT_TO_MESSAGE = 'ADD_TEXT_TO_MESSAGE';
export const ADD_IMAGE_TO_MESSAGE = 'ADD_IMAGE_TO_MESSAGE';
export const ADD_YOUTUBE_TO_MESSAGE = 'ADD_YOUTUBE_TO_MESSAGE';

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_CREATE_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_MESSAGE_CREATED:
      const newProject = action.response.data;

      return {
        ...state,
        isLoading: false,
        byId: {
          ...state.byId,
          [newProject.id]: newProject,
        },
        allIds: [
          ...state.allIds,
          newProject.id,
        ],
      };
    case ADD_TEXT_TO_MESSAGE:
      return getNextStateForAddingWidget(state, action.projectId, action.widgetId, 'content', action.text);
    case ADD_IMAGE_TO_MESSAGE:
      return getNextStateForAddingWidget(state, action.projectId, action.widgetId, 'url', action.url);
    case ADD_YOUTUBE_TO_MESSAGE:
      return getNextStateForAddingWidget(state, action.projectId, action.widgetId, 'videoId', action.videoId);
    default:
      return state;
  }
};

export default projectsReducer;
