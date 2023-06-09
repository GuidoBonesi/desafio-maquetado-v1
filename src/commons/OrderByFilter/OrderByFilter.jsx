import React from "react";

export const OrderByFilter = () => {
  return (
    <div className="container-order-by-filter">
      <select className="order-by-btn">
        <option value="" disabled selected>
          Ordenar por
        </option>
        <option value="Nombre ASC">Nombre ASC</option>
        <option value="Nombre DESC">Nombre DESC</option>
        <option value="Menor precio">Menor Precio</option>
        <option value="Mayor precio">Mayor Precio</option>
      </select>
    </div>
  );
};
