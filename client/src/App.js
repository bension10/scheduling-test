import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import ScheduleList from './ScheduleList';
import SchedulingForm from './SchedulingForm';

import { getSchedules } from './actions/schedules';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  letter-spacing: ${0.3 / 12}em;
  padding-bottom: 25px;
`;

const Content = styled.div`
  width: 80vw;
  margin: auto;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getSchedules());
  }, [dispatch]);

  return(
    <Container>
      <Content>
        <SchedulingForm />
        <ScheduleList />
      </Content>
    </Container>
  );
}

export default App;