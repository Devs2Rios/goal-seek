import { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';

// Use the props with an arrow function to dynamically change your styles ``
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background-color: ${props =>
      props.invalid ? 'rgb(255, 200, 200)' : 'white'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  &.invalid label {
    color: red;
  }
  &.invalid input {
    border-color: red;
    background-color: rgb(255, 200, 200);
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
    const inputValue = event.target.firstChild.lastChild.value;
    if (isValid && inputValue) {
      props.onAddGoal(enteredValue);
    }
    setEnteredValue('');
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* You can manage nested classes using className */}
      {/* <FormControl className={isValid ? '' : 'invalid'}> */}
      {/* Or by passing props to the styled component */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type='text'
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
