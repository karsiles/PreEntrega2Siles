import React from 'react';

const CartWidget = () => {
  // Número hardcoded para mostrar en la notificación
  const itemCount = 5; // se puede cambiar esto según la necesidad

  return (
    <div className="cart-widget">
        <a href="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG28.png">
            <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG28.png" alt="carrito de compras" width={75} />
        </a>
      
      <span className="badge bg-danger">{itemCount}</span> {/* Notificación con número hardcoded */}
    </div>
  );
};

export default CartWidget;



