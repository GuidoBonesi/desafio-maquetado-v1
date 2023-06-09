import React, { useEffect, useState } from "react";
import axios from "axios";
import { WinterCollection } from "../WinterCollection/WinterCollection";
import { WhatsApp } from "../../commons/WhatsApp/WhatsApp";
import { Header } from "../Header/Header";
import { ToyDay } from "../ToyDay/ToyDay";
import { OurBrands } from "../../commons/OurBrands/OurBrands";
import { MostWanted } from "../../commons/MostWanted/MostWanted";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  const [productsGOT, setProductsGOT] = useState([]);
  const [toyDay, setToyDay] = useState([]);
  const [mostWanted, setMostWanted] = useState([]);

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
        const seasonProducts = await axios.get(
          "https://desafio.e-cruce.com/api/v1/coleccion?id=102",
          config
        );
        setProductsGOT(seasonProducts.data);
        console.log("setProductsGOT", seasonProducts.data);
        const toyDayProduct = await axios.get(
          "https://desafio.e-cruce.com/api/v1/coleccion?id=101",
          config
        );
        setToyDay(toyDayProduct.data);
        console.log("setToyDay", toyDayProduct.data);
        const mostWantedProducts = await axios.get(
          "https://desafio.e-cruce.com/api/v1/coleccion?id=102",
          config
        );
        setMostWanted(mostWantedProducts.data);
        console.log("MostWanted", mostWantedProducts.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container-home">
      <WhatsApp />
      <Header />
      <WinterCollection productsGOT={productsGOT} />
      <OurBrands />
      <ToyDay toyDay={toyDay} />
      <MostWanted mostWanted={mostWanted} />
      <Footer />
    </div>
  );
};
