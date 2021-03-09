import * as API from '../api';

export const getSchedules = () => async dispatch => {
  try {
    const { data } = await API.fetchSchedules();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSchedule = schedule => async dispatch => {
  console.log('schedule ', schedule);
  try {
    const { data } = await API.createSchedule(schedule);
    dispatch({ type: 'CREATE', payload: data});
    dispatch(getSchedules);
  } catch(error) {
    console.log(error.message);
  }
}