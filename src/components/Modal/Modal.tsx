import React from 'react';
import Fun from '../../assets/photo/icon/happy.png';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h2>About US</h2>
          <button onClick={onClose} className="closeButton">
            &times;
          </button>
        </div>
        <div className='modulInfo'>
          <h3>Welcome to THE SIGMA STORY!</h3>
          <img src={Fun} alt="icon" width={120}/>
          <h3>Who We Are</h3>
          <p>
            We are a passionate team of professionals committed to. Our diverse background and expertise
            enable us to offer a wide range of products/services designed to meet the evolving needs
            of our customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
