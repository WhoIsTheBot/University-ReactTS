import './App.css';
import React from 'react';
import Basket from './components/Basket/Basket';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Catalog from './components/Сatalog/Catalog';
import Modal from './components/Modal/Modal';

export interface ProductItem {
  id: number;
  name: string;
  title: string;
  price: number;
  imageUrl: string;
}

function App() {
  const [isBasketOpened, setIsBasketOpened] = React.useState(false);
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<ProductItem[]>([]);
  const [addedItems, setAddedItems] = React.useState<{ [key: number]: boolean }>({});

  const onAddToCart = (obj: ProductItem) => {
    const isItemInCart = cartItems.some((item) => item.id === obj.id);

    if (!isItemInCart) {
      setCartItems((prev) => [...prev, obj]);
      setAddedItems((prevState) => ({
        ...prevState,
        [obj.id]: true,
      }));
    } else {
      console.log('This item is already in the cart');
    }
  };

  const onRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setAddedItems((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const onToggleItem = (item: ProductItem) => {
    if (addedItems[item.id]) {
      onRemoveFromCart(item.id);
    } else {
      onAddToCart(item);
    }
  };

  const orderCart = () => {
    setCartItems([]);
  
    setAddedItems((prevState) => {
      const updatedItems = { ...prevState };
      Object.keys(updatedItems).forEach((key) => {
        updatedItems[parseInt(key)] = false;
      });
      return updatedItems;
    });
  };
  

  return (
    <>
      {isBasketOpened && (
        <Basket
          onClose={() => setIsBasketOpened(false)}
          isActive={isBasketOpened}
          cartItems={cartItems}
          onRemove={onRemoveFromCart}
          orderCart={orderCart}
        />
      )}
      {isModalOpened && <Modal onClose={() => setIsModalOpened(false)} isOpen={isModalOpened} />}
      <Header
        onClickCart={() => setIsBasketOpened(true)}
        onClickModal={() => setIsModalOpened(true)}
      />
      <Information onClickModal={() => setIsModalOpened(true)} />
      <Catalog
        
        addedItems={addedItems}
        onToggleItem={onToggleItem}

      />
      <Footer />
    </>
  );
}

export default App;
