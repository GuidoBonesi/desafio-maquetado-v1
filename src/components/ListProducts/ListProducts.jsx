import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import PortadaFunkos from "../../assets/img/bannerFunkos.png";
import { CardProduct } from "../../commons/CardProduct/CardProduct";
import { Products } from "../../commons/Products/Products";
import { WhatsApp } from "../../commons/WhatsApp/WhatsApp";

export const ListProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiREVTQUZJTyBDUlVDRSJ9.qPIvlz5T69rrvV4HzNjTy3Ou_Tyhqo36NHglKZGbm4I";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "https://desafio.e-cruce.com/api/v1/coleccion?id=100",
          config
        );
        setAllProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
  return (
    <div className="container-list-products">
      <div className="container-portada-funkos">
        <img src={PortadaFunkos} alt="" />
      </div>
      <WhatsApp />
      <CardProduct allProducts={allProducts} />
    </div>
  );
};
