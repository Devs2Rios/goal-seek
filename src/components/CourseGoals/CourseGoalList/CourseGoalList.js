import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import style from './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    /* Style modile */
    <ul className={style['goal-list']}>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
