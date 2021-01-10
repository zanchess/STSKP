import React from 'react';
import StatisticLongTerm from '../../components/Statistics/Statistic';
import './statistic-page.scss';

const StatisticPage = () => (
  <>
    <div className="main-page">
      <h2 className="main-page__header">
        <StatisticLongTerm />
      </h2>
    </div>
  </>
);

export default StatisticPage;
