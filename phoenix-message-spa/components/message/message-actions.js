import { UPDATE_CURRENT_PROJECT } from 'ReducersPath/app-state-reducer';

export const updateCurrentProject = (projectId) => ({
  type: UPDATE_CURRENT_PROJECT,
  projectId,
});
