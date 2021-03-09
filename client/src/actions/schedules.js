import * as API from '../api';
import {
  FETCH_ALL,
  CREATE_SCHEDULE
} from '../constants/actionTypes';

export const getSchedules = () => async dispatch => {
  try {
    const { data } = await API.fetchSchedules();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSchedule = schedule => async dispatch => {
  try {
    const { data } = await API.createSchedule(schedule);

    dispatch({ type: CREATE_SCHEDULE, payload: data});
    // dispatch(getSchedules);
  } catch(error) {
    console.log(error.message);
  }
}