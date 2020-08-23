import {HOME_ACTION_TYPES} from '../types';
import api from '../../api';

export const fetchWeatherData = (lon, lat) => async (dispatch) => {
  try {
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ASYNC});
    const response = await api.get()
    
  } catch (error) {
    console.log(error);
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ERROR});
  }
};
