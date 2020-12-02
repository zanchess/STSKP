import React from 'react';
import exercises from '../../constants/exercises';
import TrainingItem from '../TrainingItem/TrainingItem';
import './training-list.scss';

const TrainingList = (props) => {
  console.log(props);
  const exerciseList = exercises.map((elem, i) => <TrainingItem key={i} info={elem} />);
  return (
    <div className="training-list">
      {exerciseList}
    </div>
  );
};

export default TrainingList;
