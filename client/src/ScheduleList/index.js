import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const ScheduleList = () => {
  const schedules = useSelector(state => state.schedules);
  console.log('schedules ', schedules);

  return (
    <Container>
      <div>Schedule List</div>
    </Container>
  );
};

export default ScheduleList;