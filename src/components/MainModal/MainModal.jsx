import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearTotal } from '../../redux/actions/actions';
import './main-modal.scss';

const MainModal = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clearButtonHadler = () => {
    props.clearTotal();
    handleClose();
  };

  return (
    <>
      <Button className="clear-modal__call-btn" variant="primary" onClick={handleShow}>
        Очитситить
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Очистить общую статистику</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Очистака происходит без возможности восстановить данную информацию!
          Если вы не хотите очистить общую статистику, то нажмите отмена.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={clearButtonHadler} variant="primary">Очистить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearTotal: () => dispatch(clearTotal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
