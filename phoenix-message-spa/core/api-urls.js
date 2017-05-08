import { fullApiPath } from './config';

export const ApiObject = (url) => {
  const getUrl = (params) => {
    let result = url;
    Object.keys(params).forEach((paramName) => {
      result = result.replace(`:${paramName}`, params[paramName]);
    });
    return result;
  };

  return {
    rawUrl: url,
    getUrl,
  };
};

export const ApiUrls = {
  Messages: `${fullApiPath}/messages`,
  ShowMessage: ApiObject(`${fullApiPath}/messages/:id`),
  Widgets: `${fullApiPath}/widgets`,
  UpdateWidgets: ApiObject(`${fullApiPath}/widgets/:id`),
};
