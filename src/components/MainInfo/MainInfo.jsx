import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './main-info.scss';

const MainInfo = () => (
  <>
    <div className="main-page">
      <h2 className="main-page__header">
        Main page
      </h2>
      <div className="main-info__content">
        <div className="main-info__block">
          <h4 className="main-info__head">
            Всего
            {' '}
            <br />
            {' '}
            тренировок:
          </h4>
        </div>
        <div className="main-info__block">
          <h4 className="main-info__head">
            Сделано
            {' '}
            <br />
            {' '}
            подходов:
          </h4>
        </div>
        <div className="main-info__block">
          <h4 className="main-info__head">
            Сделано
            {' '}
            <br />
            {' '}
            повторений:
          </h4>
        </div>
        <div className="main-info__block">
          <h4 className="main-info__head">
            Любимое
            {' '}
            <br />
            {' '}
            упражнение:
          </h4>
        </div>
      </div>
    </div>
  </>
);

export default MainInfo;
