import React from 'react';
import TrainingList from '../../components/TrainingList/TrainingList';
import './new-training.scss';

const NewTraining = () => (
  <div className="new-training">
    <h2 className="new-training_head">
      TrainingList
    </h2>
    <TrainingList />
  </div>
);

export default NewTraining;
