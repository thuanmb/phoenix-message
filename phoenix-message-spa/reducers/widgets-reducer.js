const defaultState = {
  byId: {
    1: {
      id: 1,
      type: 'text',
    },
    2: {
      id: 2,
      type: 'image',
    },
    3: {
      id: 3,
      type: 'youtube',
    },
  },
  allIds: [1, 2, 3],
};

const widgetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default widgetsReducer;
