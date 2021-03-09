import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

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
  height: 40px;
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

  const handleChange = useCallback(e => {
    const { value, name } = e.target;
    setStartDate({...startDate, [name]: value});
  }, [startDate]);

  // const convertDate = 
  const {year, month, day, hour, minutes} = startDate;
  const formattedDate = format(new Date(year, month-1, day, hour, minutes), "y MMM d, H:m bbb");
  return (
    <Wrapper>
      <InputField
        type="number"
        name="month"
        value={startDate.month}
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
        // value={"birthDay"}
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
        // value={"birthDay"}
        placeholder="YY"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="hour"
        // value={"birthDay"}
        placeholder="Start"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <InputField
        type="number"
        name="minutes"
        // value={"birthDay"}
        placeholder="End"
        pattern="\d*"
        inputMode="numeric"
        onChange={handleChange}
      />
      <br />
      <button>test create</button>
      <span>{`format date: ${formattedDate}`}</span>
    </Wrapper>
  )
};

export default SchedulingForm;