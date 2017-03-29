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

export const REQUEST_CREATE_MESSAGE = 'REQUEST_CREATE_MESSAGE';
export const RECEIVE_MESSAGE_CREATED = 'RECEIVE_MESSAGE_CREATED';

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
    default:
      return state;
  }
};

export default projectsReducer;
