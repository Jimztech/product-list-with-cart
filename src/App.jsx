import { useState } from 'react';
import CartPage from './components/CartPage';
import ProductGrid from './components/ProductGrid';
import OrderConfirmed from './components/OrderConfirmed';


function App() {
  const [cart, setCart] = useState([]);
  const [showOrderConfirmed, setShowOrderConfirmed] = useState(false);

  function handleQuantityChange(product, quantity) {
    if(quantity === 0) {
      // Remove Item from cart
      setCart(cart.filter(item => item.name !== product.name));
    } else {
      // Adding Item to cart
      const existingItem = cart.find(item => item.name === product.name);
      if(existingItem) {
        setCart(cart.map(item => 
          item.name === product.name
            ? {...item, quantity}
            : item
        ));
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    }
  };

  function removeFromCart(productName) {
    setCart(cart.filter(item => item.name !== productName))
  };

  function handleConfirmOrder() {
    setShowOrderConfirmed(true);
  }

  function handleStartNewOrder() {
    setShowOrderConfirmed(false);
    setCart([]);
  }

  return (
    <div className='p-[2rem] bg-rose-100'>
      <section className='flex flex-col md:flex-row'>
        <ProductGrid onQuantityChange={handleQuantityChange} cart={cart} />
        <CartPage cart={cart} removeFromCart={removeFromCart} onConfirmOrder={handleConfirmOrder} />
      </section>

      {showOrderConfirmed && (
        <OrderConfirmed 
          cart={cart}
          onStartNewOrder={handleStartNewOrder}
        />
      )}
    </div>
  )
}

export default App
