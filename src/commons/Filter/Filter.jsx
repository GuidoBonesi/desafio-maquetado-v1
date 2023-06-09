import React from "react";

export const Filter = () => {
  return (
    <div className="container-filter">
      <select className="filter">
        <option value="" disabled selected>
          {" "}
          Filtrar
        </option>
        <option value="Con descuento">Con descuento</option>
        <option value="Sin descuento">Sin descuento</option>
      </select>
    </div>
  );
};
