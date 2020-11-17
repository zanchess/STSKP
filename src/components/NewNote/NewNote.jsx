import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { add, addNum, sub } from '../../redux/actions/actions';

const NewNote = (props) => (
  <>
    <div className="main-page">
      <h2 className="main-page__header">
        New Note
      </h2>
      <Row>
        <Col xs={6}>
          Main
          <h1>Counter:</h1>
          <h4>{props.counter}</h4>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onSub}>-</button>
          <button onClick={() => props.addNumber(15)}>Add number</button>
        </Col>
      </Row>
    </div>
  </>
);

function mapStateToProps(state) {
  console.log(state);
  return {
    counter: state.counter.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    addNumber: (number) => dispatch(addNum(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
