import React from 'react';
import styled from 'styled-components';

const ScheduleContent = styled.div`
  height: auto;
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

const ScheduleCard = ({ schedule, onScheduleClick }) => {
  const { _id, name, startDate, endDate } = schedule;

  const handleClick = () => {
    if(onScheduleClick) {
      onScheduleClick(_id);
    };
  };

  return (
    <ScheduleContent onClick={handleClick}>
      <h2>{name}</h2>
      <span>{startDate} to</span>
      <span>{endDate}</span>
    </ScheduleContent>
  )
};

export default ScheduleCard;