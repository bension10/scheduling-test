import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { createSchedule, updateSchedule } from '../../actions/schedules';
import { parseDate } from '../../utils'

const maxMonthDay = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input`
  margin: 4px 8px 4px 0;
  &:last-child {
    margin-right: 0;
  }
  height: 30px;
  width: 60px;
`;

const InputTextField = styled.input`
  margin-right: 8px;
  display: block;
  &:last-child {
    margin-right: 0;
  }
  height: 30px;
  width: 100px;
`;

const Label = styled.label`
  height: 30px;
  line-height: 36px;
  margin-right: 8px;
  display: block;
`;


const Container = styled.div`
`;

const FormAction = styled.div`
  text-align: center;
`;

const workWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialStartDate = {
  startYear: '',
  startMonth: '',
  startDay: '',
  startHour: '',
  startMinutes: ''
}

const initialEndDate = {
  endYear: '',
  endMonth: '',
  endDay: '',
  endHour: '',
  endMinutes: ''
}

const SchedulingForm = ({ schedule = {}, handleSwitchView }) => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [scheduleName, setScheduleName] = useState(schedule.name);
  const dispatch = useDispatch();

  useEffect(() => {
    const {
      year: startYear,
      month: startMonth,
      day: startDay,
      hour: startHour,
      minutes: startMinutes
    } = parseDate(schedule.startDate);
    const {
      year: endYear,
      month: endMonth,
      day: endDay,
      hour: endHour,
      minutes: endMinutes
    } = parseDate(schedule.endDate); 
    setStartDate({
      startYear,
      startMonth,
      startDay,
      startHour,
      startMinutes
    });
    setEndDate({
      endYear,
      endMonth,
      endDay,
      endHour,
      endMinutes
    });
  }, [schedule.startDate, schedule.endDate]);

  const handleStartDateChange = useCallback(e => {
    const { value, name } = e.target; 

    setStartDate({...startDate, [name]: value});
  }, [startDate]);

  const handleEndDateChange = useCallback(e => {
    const { value, name } = e.target;

    setEndDate({...endDate, [name]: value});
  }, [endDate]);

  const handleNameChange = useCallback(e => {
    const { value } = e.target;

    setScheduleName(value);
  }, [setScheduleName])

  const { startYear, startMonth, startDay, startHour, startMinutes } = startDate;
  const { endYear, endMonth, endDay, endHour, endMinutes } = endDate;
  // const formattedDate = format(new Date(year, month-1, day, hour, minutes), "y MMM d, H:m bbb");

  const handleSubmitSchedule = () => {
    dispatch(createSchedule({
      name: scheduleName,
      startDate: new Date(startYear, startMonth, startDay, startHour, startMinutes),
      endDate: new Date(endYear, endMonth, endDay, endHour, endMinutes),
      isRepeating: false
    }));
    handleSwitchView('create');
  };
  
  const handleUpdateSchedule = () => {
    dispatch(updateSchedule(schedule._id, {
      name: scheduleName,
      startDate: new Date(startYear, startMonth, startDay, startHour, startMinutes),
      endDate: new Date(endYear, endMonth, endDay, endHour, endMinutes),
      isRepeating: false
    }));
    handleSwitchView('detail');
  }; 
  console.log('startDate ', startDate);

  return (
    <Wrapper>
      <Container>
        <InputTextField
          type="text"
          name="name"
          value={scheduleName}
          placeholder="Schedule Name"
          onChange={handleNameChange}
        />
        <Label>Start Date:</Label>
        <InputField
          type="number"
          name="startMonth"
          value={startMonth || ""}
          placeholder="MM"
          pattern="\d*"
          inputMode="numeric"
          min="1"
          max="2"
          onChange={handleStartDateChange}
        />
        <InputField
          type="number"
          name="startDay"
          value={startDay || ""}
          placeholder="DD"
          pattern="\d*"
          inputMode="numeric"
          min="1"
          max={3}
          onChange={handleStartDateChange}
        />
        <InputField
          type="number"
          name="startYear"
          value={startYear || ""}
          placeholder="YY"
          pattern="\d*"
          inputMode="numeric"
          onChange={handleStartDateChange}
        />
        <InputField
          type="number"
          name="startHour"
          value={startHour || ""}
          placeholder="hr"
          pattern="\d*"
          min={0}
          max={23}
          inputMode="numeric"
          onChange={handleStartDateChange}
        />
        <InputField
          type="number"
          name="startMinutes"
          value={startMinutes || ""}
          placeholder="mn"
          pattern="\d*"
          min={0}
          max={59}
          inputMode="numeric"
          onChange={handleStartDateChange}
        />
        <Label>End Date:</Label>
        <InputField
          type="number"
          name="endMonth"
          value={endMonth || ""}
          placeholder="MM"
          pattern="\d*"
          inputMode="numeric"
          min="1"
          max="2"
          onChange={handleEndDateChange}
        />
        <InputField
          type="number"
          name="endDay"
          value={endDay || ""}
          placeholder="DD"
          pattern="\d*"
          inputMode="numeric"
          min="1"
          max={3}
          onChange={handleEndDateChange}
        />
        <InputField
          type="number"
          name="endYear"
          value={endYear || ""}
          placeholder="YY"
          pattern="\d*"
          inputMode="numeric"
          onChange={handleEndDateChange}
        />
        <InputField
          type="number"
          name="endHour"
          value={endHour || ""}
          placeholder="hr"
          pattern="\d*"
          min={0}
          max={23}
          inputMode="numeric"
          onChange={handleEndDateChange}
        />
        <InputField
          type="number"
          name="endMinutes"
          value={endMinutes || ""}
          placeholder="mn"
          pattern="\d*"
          min={0}
          max={59}
          inputMode="numeric"
          onChange={handleEndDateChange}
        />
      </Container>
      <FormAction>
        { schedule._id ?
          <button onClick={handleUpdateSchedule}>Update Schedule</button> :
          <button onClick={handleSubmitSchedule}>Plot Schedule</button>}
      </FormAction>
      <br />
      {/* <span>{`Scheduling dates: ${formattedDate}`}</span> */}
    </Wrapper>
  )
};

export default SchedulingForm;