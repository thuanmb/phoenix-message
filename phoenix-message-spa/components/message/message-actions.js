import { UPDATE_CURRENT_PROJECT } from 'ReducersPath/app-state-reducer';
import { REQUEST_CREATE_MESSAGE, RECEIVE_MESSAGE_CREATED } from 'ReducersPath/projects-reducer';

export const updateCurrentProject = (projectId) => ({
  type: UPDATE_CURRENT_PROJECT,
  projectId,
});

export const createNewProject = () => (dispatch) => {
  dispatch({
    type: REQUEST_CREATE_MESSAGE,
  });

  dispatch({
    type: RECEIVE_MESSAGE_CREATED,
    response: {
      data: {
        id: Date.now(),
        widgets: [
          {
            widgetId: 1,
            properties: {
              content: `This is some text ${Date.now()}`,
            },
          },
        ],
      },
    },
  });
};
