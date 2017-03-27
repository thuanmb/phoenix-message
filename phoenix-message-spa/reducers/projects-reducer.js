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

const projectsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
