import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import './main-info.scss';

const MainInfo = (props) => {
  console.log(props);
  return (
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
              <br />
            </h4>
            <p className="main-info__p">
              {props.totalInfo.totalTraining}
            </p>
            <div className="main-info__progress">
              <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" color="green" />
              <span>{props.totalInfo.lastTraining}</span>
            </div>

          </div>
          <div className="main-info__block">
            <h4 className="main-info__head">
              Сделано
              {' '}
              <br />
              {' '}
              подходов:
              <br />
            </h4>
            <p className="main-info__p">
              {props.totalInfo.approachesDone}
            </p>
            <div className="main-info__progress">
              <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" color="green" />
              {' '}
              <span>{props.totalInfo.lastApproaches}</span>
            </div>
          </div>
          <div className="main-info__block">
            <h4 className="main-info__head">
              Сделано
              {' '}
              <br />
              {' '}
              повторений:
              <br />
            </h4>
            <p className="main-info__p">
              {props.totalInfo.repsDone}
            </p>
            <div className="main-info__progress">
              <FontAwesomeIcon icon={faLongArrowAltUp} size="lg" color="green" />
              <span>{props.totalInfo.lastReps}</span>
            </div>
          </div>
          <div className="main-info__block">
            <h4 className="main-info__head">
              Любимое
              {' '}
              <br />
              {' '}
              упражнение:
              <br />
            </h4>
            <p className="main-info__p">
              {props.totalInfo.favoriteExercise}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    totalInfo: state.totalInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainInfo);
