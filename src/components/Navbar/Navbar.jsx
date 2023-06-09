import React from "react";
import "./Navbar.css";
import btnMenuBurger from "../../assets/menuBurger.png";
import btnIconSearch from "../../assets/search.png";
import btnIconUser from "../../assets/user.png";
import btnIconCart from "../../assets/cart.png";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img src={btnMenuBurger} alt="Menu Hamburguesa" />
        <a href="/#" className="nav-btn" id="nav-categeorias">
          Categorias
        </a>
        <a href="/#" className="nav-btn">
          LOL
        </a>
        <a href="/#" className="nav-btn">
          CryBabies
        </a>
        <a href="/#" className="nav-btn">
          Funko
        </a>
        <a href="/#" className="nav-btn" id="nav-hotsale">
          Hot sale!
        </a>

        <div className="topnav-right">
          <button className="nav-btn-icon" id="btn-search">
            {" "}
            <img src={btnIconSearch} alt="Icono de búsqueda" />
          </button>
          <button className="nav-btn-icon">
            {" "}
            <img src={btnIconUser} alt="" />
          </button>
          <button className="nav-btn-icon">
            {" "}
            <img src={btnIconCart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
