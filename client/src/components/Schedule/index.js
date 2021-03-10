import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ScheduleCard from '../ScheduleCard';

const Container = styled.div`
  padding: 12px;
  border: 2px solid #c9c7c7;
  border-radius: 10px;
`;

const Schedule = ({ activeScheduleId }) => {
  const schedule = useSelector(state => {
    return state.schedules.find(schedule => schedule._id === activeScheduleId);
  });
  
  return (
    <Container>
      <ScheduleCard schedule={schedule} />
    </Container>
  );
};

export default Schedule;