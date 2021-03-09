import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import styled from 'styled-components';

import { createSchedule } from '../actions/schedules';

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

const InputField = styled.input`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  height: 30px;
  width: 60px;
`;

const InputTextField = styled.input`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  height: 30px;
  width: 100px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const workWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialDate = {
  year: '',
  month: '',
  day: '',
  hour: '',
  minutes: ''
}

const SchedulingForm = () => {

  const [startDate, setStartDate] = useState(initialDate);
  const [scheduleName, setScheduleName] = useState("");
  const dispatch = useDispatch();
;
  const handleChange = useCallback(e => {
    const { value, name } = e.target;
    setStartDate({...startDate, [name]: value});
  }, [startDate]);

  const handleNameChange = useCallback(e => {
    const { value } = e.target;
    setScheduleName(value);
  }, [setScheduleName])

  const {year, month, day, hour, minutes} = startDate;
  const formattedDate = format(new Date(year, month-1, day, hour, minutes), "y MMM d, H:m bbb");

  const submitSchedule = () => {
    dispatch(createSchedule({
      name: scheduleName,
      startDate: new Date(year, month-1, day, hour, minutes),
      endDate: new Date(),
      isRepeating: false
    }));
  };

  return (
    <Wrapper>
      <span>Start Date:</span>
      <InputTextField
        type="text"
        name="name"
        placeholder="Schedule Name"
        onChange={handleNameChange}
      />
      <InputField
        type="number"
        name="month"
        placeholder="MM"
        pattern="\d*"
        inputMode="numeric"
        min="1"
        max="2"
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="day"
        placeholder="DD"
        pattern="\d*"
        inputMode="numeric"
        min="1"
        max={3}
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="year"
        placeholder="YY"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="hour"
        placeholder="Start"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="minutes"
        placeholder="End"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <div>
        <button onClick={submitSchedule}>test create</button>
      </div>
      <br />
      <span>{`format date: ${formattedDate}`}</span>
    </Wrapper>
  )
};

export default SchedulingForm;