
const URL = 'http://localhost:5000/schedules';

export const fetchSchedules = () => {
  fetch(URL);
};

export const createSchedule = schedule => {
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(schedule)
  });
};