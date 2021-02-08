import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './info-chapter.scss';
import { getMainInfo } from '../../redux/actions/actions';

const MainInfoChapter = (props) => {
  useEffect(() => {
    props.getMainInfo();
  }, []);

  return (
    <>
      <div className="main-page">
        <h2 className="main-page__header">
          Выполнено упражнений
        </h2>
        <div className="main-info__content">
          <div className="main-info__block">
            <h4 className="main-info__head">
              Посл. тренировка:
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
              За неделю:
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
              За месяц:
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
              За год:
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
  return {
    totalInfo: state.totalInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMainInfo: () => dispatch(getMainInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainInfoChapter);
