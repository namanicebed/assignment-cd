import {HOME_ACTION_TYPES} from '../types';
import api from '../../api';

export const fetchWeatherData = (lon, lat) => async (dispatch) => {
  try {
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ASYNC});
    const response = await api.get(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=0abd83487337eb8024c915eda438c1ca`,
    );
    console.log(response.data);
    dispatch({
      type: HOME_ACTION_TYPES.GET_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ERROR});
  }
};
