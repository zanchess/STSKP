import React from 'react';

export default class TrainingDetail extends React.Component {
  render() {
    if (this.props.match.params.name === 'running') {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Бег</h1>
        </div>
      );
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Интервальное упражнение</h1>
      </div>
    );
  }
}
