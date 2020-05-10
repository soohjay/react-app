import React, { useRef, useState } from 'react';
import Modal from './Modal';
import './HooksRef.css'
import ModalTemplate from './ModalTemplate';

function HooksRef() {

  const [input, setInput] = useState('');

  const modalRef = useRef();
  const templateModalRef = useRef();

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  }

  const openModal = () => {
    modalRef.current.open();
  }

  const openTemplateModal = () => {
    templateModalRef.current.open();
  }

  const header = <h1>Modal Header</h1>;
  const body = <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit porro, minima quae commodi suscipit sit perferendis! Repellendus necessitatibus in optio dignissimos quod dolor provident, nihil aut. Nobis, tempora veritatis!
      Et consequuntur odit soluta pariatur voluptas dolore. Dolorum laboriosam optio exercitationem id natus, vel atque nulla pariatur dolor expedita maxime officia delectus architecto doloremque repellat eius aperiam, culpa vitae ipsam!
      Cumque odit asperiores sed reiciendis exercitationem quia aperiam porro animi unde laudantium modi, magni pariatur consectetur nesciunt, voluptas tempora natus? Non earum ut, beatae nisi quia ipsa! Ratione, voluptatibus animi!
    </p>;

  return (
    <div className="container">
      <input
        value={input}
        onChange={handleChange}
      />
      <button onClick={openModal}>OPEN MODAL</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit porro, minima quae commodi suscipit sit perferendis! Repellendus necessitatibus in optio dignissimos quod dolor provident, nihil aut. Nobis, tempora veritatis!
          Et consequuntur odit soluta pariatur voluptas dolore. Dolorum laboriosam optio exercitationem id natus, vel atque nulla pariatur dolor expedita maxime officia delectus architecto doloremque repellat eius aperiam, culpa vitae ipsam!
          Cumque odit asperiores sed reiciendis exercitationem quia aperiam porro animi unde laudantium modi, magni pariatur consectetur nesciunt, voluptas tempora natus? Non earum ut, beatae nisi quia ipsa! Ratione, voluptatibus animi!
        </p>
      </Modal>
      <hr />
      <button onClick={openTemplateModal}>OPEN TEMPLATE MODAL</button>
      <ModalTemplate
        ref={templateModalRef}
        header={header}
        body={body}
      />
    </div>
  )
}

export default HooksRef;