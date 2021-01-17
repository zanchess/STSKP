import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getStatsInfo } from '../../redux/actions/actions';

const StatisticLongTerm = (props) => {
  useEffect(() => {
    props.getStatsInfo();
  }, []);
  let dates = null;
  let numOfWords = null;
  let sumOfWords = null;

  if (props.statsInfo.length) {
    dates = props.statsInfo.map((item) => item.date);
    numOfWords = props.statsInfo.map((item) => item.words);
    sumOfWords = [];
    numOfWords.reduce((acc, item) => {
      sumOfWords.push(acc + item);
      return (acc + item);
    }, 0);
  }

  /*   const left = sumOfWords.map((it) => 3600 - it);
  const percent = sumOfWords.map((it) => ((100 * it) / 3600).toFixed(1)); */

  const runningData = {
    labels: dates,
    datasets: [
      {
        label: 'Бег',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(37,95,82,0.47)',
        borderColor: 'rgba(37,95,82,0.47)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#000000',
        pointBackgroundColor: '#000000',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(236,9,9)',
        pointHoverBorderColor: 'rgb(236,9,9)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: numOfWords,
      },
    ],
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <div className="statistic-long-term">
            <Line key="num" data={runningData} />
          </div>
        </Col>
      </Row>
    </>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    statsInfo: state.statsInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStatsInfo: () => dispatch(getStatsInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticLongTerm);
