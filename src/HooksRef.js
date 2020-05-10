import React, { useRef } from 'react';
import Modal from './Modal';
import './HooksRef.css'

function HooksRef() {

  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.open();
  }

  return (
    <div className="container">
      <button onClick={openModal}>OPEN MODAL</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae fugit porro, minima quae commodi suscipit sit perferendis! Repellendus necessitatibus in optio dignissimos quod dolor provident, nihil aut. Nobis, tempora veritatis!
          Et consequuntur odit soluta pariatur voluptas dolore. Dolorum laboriosam optio exercitationem id natus, vel atque nulla pariatur dolor expedita maxime officia delectus architecto doloremque repellat eius aperiam, culpa vitae ipsam!
          Cumque odit asperiores sed reiciendis exercitationem quia aperiam porro animi unde laudantium modi, magni pariatur consectetur nesciunt, voluptas tempora natus? Non earum ut, beatae nisi quia ipsa! Ratione, voluptatibus animi!
        </p>
      </Modal>
    </div>
  )
}

export default HooksRef;