import React from "react";
import "./OurBrands.css";
import NextIcon from "../../assets/img/controlNext.png";
import PrevIcon from "../../assets/img/controlPrev.png";
import Disney from "../../assets/img/logoDisney.png";
import Marvel from "../../assets/img/logoMarvel.png";
import Lol from "../../assets/img/logoLol.png";
import Funko from "../../assets/img/logoFunko.png";

export const OurBrands = () => {
  return (
    <div className="container-our-brands">
      <div className="our-brands">
        <h2 className="our-brands-title">Nuestras marcas</h2>
      </div>
      <button className="carousel-control-prev" type="button">
        <span>
          <img
            src={PrevIcon}
            className="carousel-control-prev-icon"
            alt="Boton Anterior"
          ></img>
        </span>
      </button>
      <button className="carousel-control-next" type="button">
        <span className="carousel-control-next-icon">
          <img
            src={NextIcon}
            className="carousel-control-next-icon"
            alt="Boton Siguiente"
          ></img>
        </span>
      </button>
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Disney} className="img-brand" alt="Logo Disney"></img>
          </div>
          <div className="carousel-item">
            <img src={Marvel} className="img-brand" alt="Logo Marvel"></img>
          </div>
          <div className="carousel-item">
            <img src={Funko} className="img-brand" alt="Logo Funko"></img>
          </div>
          <div className="carousel-item">
            <img src={Lol} className="img-brand" alt="Logo Lol"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
