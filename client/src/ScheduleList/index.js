import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ScheduleCard from '../ScheduleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const ScheduleList = () => {
  const schedules = useSelector(state => {
    return state.schedules;
  });
  console.log('schedules ', schedules);
  return (
    <Container>
      <div>Schedule List</div>
      {
        schedules.map(schedule => (
          <ScheduleCard schedule={schedule} key={schedule._id}/>
        ))
      }
    </Container>
  );
};

export default ScheduleList;