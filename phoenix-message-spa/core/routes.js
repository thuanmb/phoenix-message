import { ApiObject } from './api-urls';

const routes = {
  paths: {
    createMessage: ApiObject('/messages/:id/edit'),
    showMessage: '/messages/:id',
  },
};
export default routes;
