import React, { useState } from 'react';
import './modal.css';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={openModal} className='contactBtn'>SEND</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="closeBtn" onClick={closeModal}><BsXLg/></span>
            <h2>THANK YOU!</h2>
            <p>Your message has been received and we will contact you as soon as possible.</p>
            <Link to="/" className='modalContentLink'>HOME PAGE</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
