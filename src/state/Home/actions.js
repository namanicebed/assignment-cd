import {HOME_ACTION_TYPES} from '../types';
import api from '../../api';
import moment from 'moment';

export const fetchWeatherData = (lon, lat) => async (dispatch) => {
  try {
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ASYNC});
    const currentTemp = await api.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=0abd83487337eb8024c915eda438c1ca`,
    );
    const next5DayData = await api.get(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=0abd83487337eb8024c915eda438c1ca`,
    );
    let fiveDayData = [];
    let currentdate = '';
    next5DayData.data.list.map((d) => {
      if (new Date(d.dt_txt).getDate() != currentdate) {
        fiveDayData.push({
          date: moment(d.dt_txt).format('dddd'),
          temp: d.main.temp,
        });
      }
      currentdate = new Date(d.dt_txt).getDate();
    });
    const nextFiveDayTemp = fiveDayData.splice(1);

    dispatch({
      type: HOME_ACTION_TYPES.GET_DATA_SUCCESS,
      payload: {
        todayData: {
          temp: currentTemp.data.main.temp,
          city: currentTemp.data.name,
        },
        nextFiveDayTemp,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({type: HOME_ACTION_TYPES.GET_DATA_ERROR});
  }
};
