import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props,ref) => {

  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: open,
      close: close,
    }
  });

  const open = () => setDisplay(true);
  const close = () => setDisplay(false);

  if (display) {
    return ReactDOM.createPortal (
      <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={close}/>
        <div className="modal-box">
          {props.children}
          <button onClick={close}>Close Modal</button>
        </div>
      </div>
    , document.getElementById('modal-root'));
  }

  return null;

};

export default forwardRef(Modal);