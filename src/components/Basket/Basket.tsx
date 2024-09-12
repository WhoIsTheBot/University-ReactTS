import Close from '../../assets/photo/icon/close.png';
import Sad from '../../assets/photo/icon/sad_1.png';
import React from 'react';
import { ProductItem } from '../../App';

interface BasketProps {
  onClose: () => void;
  isActive: boolean;
  cartItems: ProductItem[];
  onRemove: (id: number) => void; // Function to remove item
}

function Basket({ onClose, isActive, cartItems, onRemove }: BasketProps) {
  React.useEffect(() => {
    if (isActive) {
      // Block scroll when the basket is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when the basket is closed
      document.body.style.overflow = '';
    }
    return () => {
      // Cleanup: Restore scroll when component unmounts
      document.body.style.overflow = '';
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="wrapper">
      <div className="basket">
        <div className="main-basket">
          <h2>Basket</h2>
          <button onClick={onClose} className="btn-close">
            <img src={Close} alt="close" width={13} />
          </button>
        </div>
        <div className="basket-products">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="card" key={item.id}>
                <img className="photo-card" src={item.imageUrl} alt={item.name} />
                <h2>{item.name}</h2>
                <div className="info-card">
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button
                    className="delete-card"
                    onClick={() => onRemove(item.id)}
                  >
                    <img src={Close} alt="close" width={9} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-basket">
              <img src={Sad} alt="sad" />
              <p>Your basket is empty</p>
            </div>
          )}
        </div>
        <div className="order-products">
          <p className="price-products">
            Payable: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
          <button className="btn-order">Place an order</button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
