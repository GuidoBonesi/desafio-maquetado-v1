import React from "react";
import "./TopBannerBenefits.css";
import creditCard from "../../assets/img/creditCard.png";
import envioCamion from "../../assets/img/envioCamion.png";
import envioMoto from "../../assets/img/envioMoto.png";

export const TopBannerBenefits = () => {
  return (
    <div className="container-benefits-desktop">
      <div className="benefit">
        <img
          className="img-creditCard-banner"
          src={creditCard}
          alt="Tarjeta de credito"
        />
        <h4 className="title-banner-benefits">12 y 18 Cuotas</h4>
        <p classname="description-banner-benefits">¡Sin interés!</p>
      </div>
      <div className="divider"></div>
      <div className="benefit">
        <img
          class="img-creditCard-banner"
          src={envioCamion}
          alt="Envio en Camion"
        />
        <h4 className="title-banner-benefits">Envío gratis</h4>
        <p classname="description-banner-benefits">En todas las compras</p>
      </div>
      <div className="divider"></div>
      <div className="benefit">
        <img
          class="img-creditCard-banner"
          src={envioMoto}
          alt="Envio en moto"
        />
        <h4 className="title-banner-benefits">Te llega en 24 hs</h4>
        <p classname="description-banner-benefits">Con costo adicional</p>
      </div>
    </div>
  );
};
