import React from 'react';

export default class TrainingDetail extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{this.props.match.params.name}</h1>
      </div>
    );
  }
}
