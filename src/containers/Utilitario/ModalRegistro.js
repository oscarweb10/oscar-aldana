import React from 'react'
import './ModalRegistro.css'

const ModalRegistro = ({ isOpen, closeModal, title, children }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h4>{title}</h4>
                <div className='registrar'>
                    <button type="button" className="btn btn-primary" onClick={closeModal}>
                        Enviar
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ModalRegistro