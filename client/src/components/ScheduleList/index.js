import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ScheduleCard from '../ScheduleCard';

const Container = styled.div`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const ScheduleList = ({ onScheduleClick }) => {
  const schedules = useSelector(state => {
    return state.schedules;
  });
  
  return (
    <Container>
      <div>Schedule List</div>
      {
        schedules.map(schedule => (
          <ScheduleCard
            schedule={schedule}
            key={schedule._id}
            onScheduleClick={onScheduleClick}
          />
        ))
      }
    </Container>
  );
};

export default ScheduleList;