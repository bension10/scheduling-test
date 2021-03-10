import * as API from '../api';
import {
  FETCH_ALL,
  CREATE_SCHEDULE,
  DELETE_SCHEDULE,
  UPDATE_SCHEDULE
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
  console.log('schedule ', schedule);
  try {
    const { data } = await API.createSchedule(schedule);

    dispatch({ type: CREATE_SCHEDULE, payload: data});
    // dispatch(getSchedules);
  } catch(error) {
    console.log(error.message);
  }
}

export const updateSchedule = (id, newSchedule) => async dispatch => {
  try {
    const { data } = await API.updateSchedule(id, newSchedule);

    dispatch({ type: UPDATE_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteSchedule = id => async dispatch => {
  try {
    await API.deleteSchedule(id);

    dispatch({ type: DELETE_SCHEDULE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
}