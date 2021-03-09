import React from 'react';
import styled from 'styled-components';

const ScheduleContent = styled.div`
  height: 100px;
  width: 180px;
  margin-top: 12px;
  border: 1px solid #404040;
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

const ScheduleCard = ({ schedule }) => {
  const { name, startDate, endDate } = schedule;

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <ScheduleContent>
      <h2>{name}</h2>
      <span>{startDate}</span>
      <span>{endDate}</span>
      <Actions>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </Actions>
    </ScheduleContent>
  )
};

export default ScheduleCard;