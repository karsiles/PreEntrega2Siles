import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemListContainer greeting= "Es momento de llenar tu cocina" />
    </div>
  );
}

export default ItemListContainer;
export function CartWidget() {

    return (
        <div className="cart-widget">
            <i className="fas fa-shoopping-cart"></i>
            <span className="notification">5</span>
            <img src='/imagenes/logo essen.png' alt="logo" width={75} />


        </div>
    );
}
