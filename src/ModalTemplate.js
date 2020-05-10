import React, { useState, forwardRef, useImperativeHandle, memo } from 'react';
import ReactDOM from 'react-dom';

const areEqual = (prevProps, nextProps) => true;

const ModalTemplate = (props,ref) => {

  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: open,
      close: close,
    }
  });

  const open = () => setDisplay(true);
  const close = () => setDisplay(false);

  const { header, body } = props;

  if (display) {
    return ReactDOM.createPortal (
      <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={close}/>
        <div className="modal-box">
          {header}
          <hr />
          {body}
          <hr />
          <button onClick={close}>Close Modal</button>
        </div>
      </div>
    , document.getElementById('modal-root'));
  }

  return null;

};

export default memo(forwardRef(ModalTemplate), areEqual);