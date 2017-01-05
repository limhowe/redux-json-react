import {CALL_TEST_API} from '../services/api';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = req => ({
  type: REQUEST_DATA,
  req
});

export const receiveData = json => ({
  type: RECEIVE_DATA,
  json: json
});

export const fetchData = req => dispatch => {
  dispatch(requestData(req));
  return CALL_TEST_API()
    .then(json => dispatch(receiveData(json)));
};
