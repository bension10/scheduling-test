import axios from 'axios';

const URL = 'http://localhost:5000/schedules';

export const fetchSchedules = () => axios.get(URL);
export const createSchedule = schedule => axios.post(URL, schedule);
export const deleteSchedule = id => axios.delete(`${URL}/${id}`);
export const updateSchedule = (id, newSchedule) => axios.patch(`${URL}/${id}`, newSchedule);