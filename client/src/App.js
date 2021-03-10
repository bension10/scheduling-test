import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import ScheduleList from './components/ScheduleList';
import ScheduleSection from './components/ScheduleSection'

import { getSchedules } from './actions/schedules';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  letter-spacing: ${0.3 / 12}em;
  padding-bottom: 25px;
  margin: 50px 0;
`;

const Content = styled.div`
  width: 80vw;
  margin: auto;
  position: relative;
`;

const App = () => {
  const [activeScheduleId, setActiveSchedule] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getSchedules());
  }, [dispatch]);

  const handleScheduleClick = useCallback(id => {
    setActiveSchedule(id);
  }, []);

  return(
    <Container>
      <Content>
        <ScheduleList onScheduleClick={handleScheduleClick} />
        <ScheduleSection activeScheduleId={activeScheduleId} />
      </Content>
    </Container>
  );
}

export default App;