import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState(''),
    [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const val = event.target.value;
    setEnteredValue(val);
    setIsValid(val.trim().length > 0 && val ? true : false);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (isValid) {
      props.onAddGoal(enteredValue);
    }
    setEnteredValue('');
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input
          type='text'
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
