const API_ROOT = 'https://phoenix-json-api-example.herokuapp.com/api/test';

export const CALL_TEST_API = () => {
  return fetch(API_ROOT)
    .then(response => response.json());
};
