import React from "react";
import "./WinterCollection.css";
import btnCollection from "../../assets/img/btnCollection.png";
import { CardProduct } from "../../commons/CardProduct/CardProduct";

export const WinterCollection = ({ productsGOT }) => {
  return (
    <div className="container-winter-collection">
      <div className="box-title-description">
        <div className="title-winter-collection">
          <h2 className="winter-title">
            Llegó el invierno, encontralo antes que nadie
          </h2>
          <h4 className="winter-subtitle">
            La colección más completa de Game of Thrones está en X
          </h4>
          <button className="btn-collection">
            <span className="btn-collection-text">Collection</span>
          </button>
        </div>
      </div>
      <div className="box-top-left">
        <CardProduct productsGOT={productsGOT} />
      </div>
    </div>
  );
};
