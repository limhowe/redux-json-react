import {
  RECEIVE_DATA,
  REQUEST_DATA
} from '../actions';

const dataReducer = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        items: action.json.data.map( item => ({
          id: item.id,
          title: item.title
        }))
      };
    default:
      return state;
  }
};

export default dataReducer;
