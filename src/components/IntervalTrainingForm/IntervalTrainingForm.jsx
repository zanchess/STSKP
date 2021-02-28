/* eslint-disable prefer-destructuring */
import { Button, Col, Form } from 'react-bootstrap';
import React from 'react';
import './interval-training.scss';
import exercises from '../../constants/exercises';

const IntervalForm = (props) => {
  console.log(props);
  let exerciseItem = null;
  exercises.forEach((e) => {
    if (e.eng === props.params.location.pathname.split('/')[2]) {
      exerciseItem = e.ru;
    }
  });

  return (
    <>
      <h3>
        {exerciseItem}
      </h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Время</Form.Label>
            <Form.Control type="string" placeholder="Время" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDistance">
            <Form.Label>Расстояние</Form.Label>
            <Form.Control type="string" placeholder="Расстояние" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Запись
        </Button>
      </Form>
    </>
  );
};

export default IntervalForm;
