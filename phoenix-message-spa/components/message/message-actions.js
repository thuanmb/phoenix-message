import { UPDATE_CURRENT_PROJECT } from 'ReducersPath/app-state-reducer';
import { REQUEST_CREATE_MESSAGE, RECEIVE_MESSAGE_CREATED, ADD_TEXT_TO_MESSAGE, ADD_IMAGE_TO_MESSAGE, ADD_YOUTUBE_TO_MESSAGE } from 'ReducersPath/projects-reducer';

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

export const addTextToMessage = (projectId, widgetId, text) => ({
  type: ADD_TEXT_TO_MESSAGE,
  projectId,
  widgetId,
  text,
});

export const addImageToMessage = (projectId, widgetId, url) => ({
  type: ADD_IMAGE_TO_MESSAGE,
  projectId,
  widgetId,
  url,
});

export const addYoutubeToMessage = (projectId, widgetId, videoId) => ({
  type: ADD_YOUTUBE_TO_MESSAGE,
  projectId,
  widgetId,
  videoId,
});
