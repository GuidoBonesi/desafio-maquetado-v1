import React from "react";
import btnCart from "../../assets/img/btnCartGreen.png";

export const ToyDayItem = ({ toyDay }) => {
  return (
    <>
      {toyDay.map((product) => (
        <div className="cardProduct" key={product.id}>
          <img
            className="image-product"
            src={product.image}
            alt="Imagen Funko GOT"
          />
          <h4 className="brand-product">Funko</h4>
          <h4 className="title-product">{product.title}</h4>
          <div className="payment-container">
            <h4 className="payment-product">6 Cuotas s/interés de: </h4>
            <h4 className="final-cuots">
              <b>${(product.price / 6).toFixed(2)}</b>
            </h4>
          </div>
          <div className="box-price">
            <div className="text-final">
              <div className="without-discount">Final: ${product.price}</div>
            </div>
          </div>
          <div className="box-cart">
            <img className="icon-cart" src={btnCart} alt="Logo cart" />
          </div>
        </div>
      ))}
    </>
  );
};
