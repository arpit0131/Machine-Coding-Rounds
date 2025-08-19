import React, { useEffect, useRef } from "react";
import "./modal.css";

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  return (
    <div className="modal-overlay " ref={modalRef}>
      <button className="close-btn " onClick={() => onClose()}>
        Close
      </button>
      <div>This is Modal</div>
    </div>
  );
};
export default Modal;
