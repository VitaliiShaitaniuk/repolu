import React from 'react';
import '../components/modal.css';

const Modal = ({active, setActive}) => {
    return (
        <div className="modal">
            <div className="modal__content"></div>
        </div>
    );
};

export default Modal;