import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemListContainer greeting= "Es momento de llenar tu cocina" />
    </div>
  );
}

export default ItemListContainer;