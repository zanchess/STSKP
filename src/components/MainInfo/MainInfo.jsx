import React from 'react';
import { connect } from 'react-redux';
import { clearTotal } from '../../redux/actions/actions';
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
    clearTotal: () => dispatch(clearTotal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainInfo);
