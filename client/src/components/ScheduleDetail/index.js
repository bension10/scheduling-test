import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { deleteSchedule } from '../../actions/schedules';

const ScheduleContent = styled.div`
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 12px;
  font-size: 12px;

  > h2 {
    margin: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
  
  > button:last-child {
    margin-left: 8px;
  }
`;

const ScheduleDetail = ({ schedule, handleSwitchView }) => {
  const { _id, name, startDate, endDate } = schedule;
  const dispatch = useDispatch();

  const handleDelete = useCallback((id) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are you sure you want to delete this schedule?")) {
      dispatch(deleteSchedule(_id));
      handleSwitchView('create');
    } else {
      console.log("no");
    }
  }, [_id, dispatch, handleSwitchView]);

  const handleEdit = () => {
    handleSwitchView('edit');
  }

  return (
    <ScheduleContent>
      <h2>{name}</h2>
      <span>{startDate} to </span>
      <span>{endDate}</span>
      <Actions>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </Actions>
    </ScheduleContent>
  )
};

export default ScheduleDetail;