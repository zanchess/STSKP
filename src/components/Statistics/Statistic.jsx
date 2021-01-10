import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

const StatisticLongTerm = () => {
  const testDATA = [
    { date: '1/6/2020', words: 6 },
    { date: '2/6/2020', words: 3 },
    { date: '3/6/2020', words: 1 },
    { date: '4/6/2020', words: 16 },
    { date: '5/6/2020', words: 10 },
    { date: '6/6/2020', words: 8 },
    { date: '7/6/2020', words: 3 },
    { date: '8/6/2020', words: 12 },
    { date: '9/6/2020', words: 14 },
    { date: '10/6/2020', words: 16 },
    { date: '11/6/2020', words: 5 },
  ];

  const dates = testDATA.map((item) => item.date);
  const numOfWords = testDATA.map((item) => item.words);
  const sumOfWords = [];
  numOfWords.reduce((acc, item) => {
    sumOfWords.push(acc + item);
    return (acc + item);
  }, 0);
  /*   const left = sumOfWords.map((it) => 3600 - it);
  const percent = sumOfWords.map((it) => ((100 * it) / 3600).toFixed(1)); */

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Количество изученных слов.',
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
            <Line key="num" data={data} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StatisticLongTerm;
