const apiPath = 'http://localhost:5001/api/v1';

export default {
  loginPath: () => [apiPath, 'login'].join('/')
}
