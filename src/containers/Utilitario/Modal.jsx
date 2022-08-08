import React from 'react'
import swal from 'sweetalert';
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, children }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
        swal({
            title: "GRACIAS POR SU COMPRA!!",
            text: " Pronto te Contactaremos",
            icon: "success",
            button: "Aceptar"
        });
    }
    return (
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h4>{title}</h4>
                <div className='registrar'>
                    <button type="button" className="btn btn-primary" onClick={closeModal}>
                        Aceptar
                    </button>
                </div>
                {children}
            </div>
                  </div>
    )
}

export default Modal