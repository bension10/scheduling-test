import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ScheduleList from './ScheduleList';

import { getSchedules } from './actions/schedules';


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getSchedules());
  }, [dispatch]);

  return(
    <div>
      <h1>Schedule List</h1>
      <ScheduleList />
    </div>
  );
}

export default App;