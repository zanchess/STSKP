import { Button, Col, Form } from 'react-bootstrap';
import React from 'react';

import './running-form.scss';

const RunningForm = (props) => {
  console.log(props);

  return (
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
  );
};

export default RunningForm;
