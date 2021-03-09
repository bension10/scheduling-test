import {
  FETCH_ALL,
  CREATE_SCHEDULE
} from '../constants/actionTypes';

const schedules = (schedules = [], action) => {
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_SCHEDULE:
      return [...schedules, action.payload];
    default:
      return schedules;
  }
}

export default schedules;