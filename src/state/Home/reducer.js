import {HOME_ACTION_TYPES} from '../types';

const initialState = {
  loading: false,
  error: false,
  data: null,
};

export default home = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case HOME_ACTION_TYPES.GET_DATA_ASYNC:
      return {
        ...newState,
        loading: true,
        data: null,
        error: false,
      };
    case HOME_ACTION_TYPES.GET_DATA_SUCCESS:
      return {
        ...newState,
        loading: false,
        error: false,
        data: action.payload,
      };
    case HOME_ACTION_TYPES.GET_DATA_ERROR:
      return {
        ...newState,
        loading: false,
        error: true,
        data: null,
      };
    default:
      return newState;
  }
};
