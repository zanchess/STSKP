import React from 'react';
import './training-item.scss';

const TrainingItem = (props) => {
  console.log(props);

  return (
    <div className="training-item">
      <h5>
        {props.info.ru}
      </h5>
    </div>
  );
};

export default TrainingItem;
