import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getStatsInfo } from '../../redux/actions/actions';

const StatisticLongTerm = (props) => {
  useEffect(() => {
    props.getStatsInfo();
  }, []);
  const dates = {};
  const numOfWords = {};
  const sumOfWords = {};

  if (props.statsInfo.running) {
    dates.running = props.statsInfo.running.map((item) => item.date);
    numOfWords.running = props.statsInfo.running.map((item) => item.words);
    sumOfWords.running = [];
    numOfWords.running.reduce((acc, item) => {
      sumOfWords.running.push(acc + item);
      return (acc + item);
    }, 0);
  }

  if (props.statsInfo.swimming) {
    dates.swimming = props.statsInfo.swimming.map((item) => item.date);
    numOfWords.swimming = props.statsInfo.swimming.map((item) => item.words);
    sumOfWords.swimming = [];
    numOfWords.swimming.reduce((acc, item) => {
      sumOfWords.swimming.push(acc + item);
      return (acc + item);
    }, 0);
  }

  if (props.statsInfo.calories) {
    dates.calories = props.statsInfo.swimming.map((item) => item.date);
    numOfWords.calories = props.statsInfo.swimming.map((item) => item.words);
    sumOfWords.calories = [];
    numOfWords.calories.reduce((acc, item) => {
      sumOfWords.calories.push(acc + item);
      return (acc + item);
    }, 0);
  }

  /*   const left = sumOfWords.map((it) => 3600 - it);
  const percent = sumOfWords.map((it) => ((100 * it) / 3600).toFixed(1)); */

  const runningData = {
    labels: dates.running,
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
        data: numOfWords.running,
      },
    ],
  };

  const swimmingData = {
    labels: dates.swimming,
    datasets: [
      {
        label: 'Плаванье',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(77,77, 77,0.47)',
        borderColor: 'rgba(77,77, 77,0.47)',
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
        data: numOfWords.swimming,
      },
    ],
  };

  const caloriesData = {
    labels: dates.calories,
    datasets: [
      {
        label: 'Затраченные каллории',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(77,77, 77,0.47)',
        borderColor: 'rgba(77,77, 77,0.47)',
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
        data: numOfWords.calories,
      },
    ],
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <div className="statistic-long-term">
            <Line key="num" data={runningData} />
            <Line key="num" data={swimmingData} />
            <Line key="num" data={caloriesData} />
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
