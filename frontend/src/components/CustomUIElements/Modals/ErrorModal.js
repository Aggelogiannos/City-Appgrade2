import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button/Button';

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Υπήρξε ένα πρόβλημα κατά την διαδικασία!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
