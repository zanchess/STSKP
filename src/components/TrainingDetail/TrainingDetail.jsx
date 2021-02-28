import React from 'react';
import IntervalForm from '../IntervalTrainingForm/IntervalTrainingForm';
import RunningForm from '../runningForm/RunningForm';

export default class TrainingDetail extends React.Component {
  render() {
    if (this.props.match.params.name === 'running') {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Бег</h1>
          <RunningForm />
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Интервальное упражнение</h1>
        <IntervalForm params={this.props} />

      </div>
    );
  }
}
