import React from 'react';
import { withRouter } from 'react-router-dom';
import './training-item.scss';

const TrainingItem = (props) => {
  console.log(props);

  return (
    <div
      className="training-item"
      onClick={() => {
        props.history.push(`/new/${props.info.eng.toLowerCase()}`);
      }}
    >
      <h5>
        {props.info.ru}
      </h5>
    </div>
  );
};

export default withRouter(TrainingItem);
