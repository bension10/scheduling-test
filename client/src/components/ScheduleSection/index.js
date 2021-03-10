import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ScheduleDetail from '../ScheduleDetail';
import SchedulingForm from '../SchedulingForm';

const Wrapper = styled.div`
  width: 400px;
  position: absolute;
  right: 0;
  border: 1px solid #f3f3f3;
  padding: 12px;
`;
const ScheduleSection = ({ activeScheduleId }) => {
  const [view, setView] = useState(null);
  const schedule = useSelector(state => {
    return state.schedules.find(schedule => schedule._id === activeScheduleId);
  });
  
  useEffect(() => {
    setView(activeScheduleId ? 'detail' : null)
  }, [activeScheduleId]);
  
  const handleSwitchView = useCallback(value => {
    setView(value)
  }, []);

  const displaySelectedView = () => {
    switch(view) {
      case 'edit':
        return (
          <>
            <p>Edit Schedule</p>
            <SchedulingForm schedule={schedule} handleSwitchView={handleSwitchView} />
            <button onClick={() => handleSwitchView('detail')}>Back</button>
          </>
        );
      case 'detail':
        return <ScheduleDetail schedule={schedule} handleSwitchView={handleSwitchView} />;
      case 'create':
        return <SchedulingForm handleSwitchView={handleSwitchView} />;
      default: 
        return (
          <>
            <p>Click a schedule in the list to see details or create a new schedule.</p>
            <button onClick={() => handleSwitchView('create')}>Create New Schedule</button>
          </>
        );
    }
  }

  return (
    <Wrapper>
      {displaySelectedView()}
    </Wrapper>
  )
};

export default ScheduleSection;