import { ApiObject } from './api-urls';

const routes = {
  paths: {
    createMessage: ApiObject('/messages/:id/edit'),
    showMessage: '/messages/:id',
    sharedMessage: '/shared_messages/:token',
  },
};
export default routes;
