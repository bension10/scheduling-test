import * as API from '../api';

export const getSchedules = () => async (dispatch) => {
  try {
    const { data } = await API.fetchSchedules();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};