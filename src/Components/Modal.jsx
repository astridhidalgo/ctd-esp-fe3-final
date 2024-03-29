import { useEffect, useState } from "react";
import "../Components/styles/modal.css";

const Modal = ({ children, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(show);
    }, 300);
  }, [show]);

  return isVisible ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>
          &times;
        </div>
        <div className="datosMedicos">{children}</div>
        <div className="contenedor-botton-modal">
          <button className="modal-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
