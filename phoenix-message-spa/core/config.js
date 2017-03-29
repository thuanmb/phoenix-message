const apiPath = '/api/v1';
const hostPath = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000';
  }
  return '';
};
export const fullApiPath = `${hostPath()}${apiPath}`;
