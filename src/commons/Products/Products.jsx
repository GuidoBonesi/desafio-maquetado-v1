import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { ListProducts } from "../../components/ListProducts/ListProducts";

export const Products = () => {
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
    <div>
      <ul>
        {allProducts.map((products) => (
          <ListProducts products={products} />
        ))}
      </ul>
    </div>
  );
};
