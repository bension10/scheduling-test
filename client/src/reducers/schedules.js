import {
  FETCH_ALL,
  CREATE_SCHEDULE,
  DELETE_SCHEDULE
} from '../constants/actionTypes';

const schedules = (schedules = [], action) => {
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_SCHEDULE:
      return [...schedules, action.payload];
    case DELETE_SCHEDULE:
      return schedules.filter(schedule => schedule._id !== action.payload);
    default:
      return schedules;
  }
}

export default schedules;