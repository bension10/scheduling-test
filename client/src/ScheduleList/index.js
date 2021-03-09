import React from 'react';
import { useSelector } from 'react-redux';

import SchedulingForm from '../SchedulingForm';

const ScheduleList = () => {
  const schedules = useSelector(state => state.schedules);
  console.log(schedules);

  return (
    <>
      <div>Schedule List</div>
      <SchedulingForm />
    </>
  );
};

export default ScheduleList;