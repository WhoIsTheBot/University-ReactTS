import React from 'react';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      // Заблокувати прокрутку
      document.body.style.overflow = 'hidden';
    } else {
      // Відновити прокрутку
      document.body.style.overflow = '';
    }
    // Відновлюємо прокрутку при розмонтуванні компонента
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
          <p>
            At THE SIGMA STORY, our mission is to provide high-quality products and exceptional
            service to our customers. Founded in 2018, we have been dedicated to delivering
            excellence in through innovation and a customer-centric approach.
          </p>
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
