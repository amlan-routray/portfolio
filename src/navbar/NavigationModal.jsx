import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const NavigationModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="nav-modal-overlay" onClick={onClose}>
      <div className="nav-modal" onClick={(e) => e.stopPropagation()}>
        <img src="close.svg" alt="close menu" onClick={onClose}/>
        <div className="nav-links">
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#skills" onClick={onClose}>
            Skills
          </a>
          <a href="#features" onClick={onClose}>
            Features
          </a>
          <a href="#contact" onClick={onClose}>
            Say Hello
          </a>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default NavigationModal;
