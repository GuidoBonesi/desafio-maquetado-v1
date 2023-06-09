import React from "react";
import "./MostWanted.css";
import { MostWantedItem } from "./MostWantedItem";

export const MostWanted = ({ mostWanted }) => {
  return (
    <>
      <div className="container-wanted">
        <h3 className="title-container-wanted">Lo más buscado</h3>
        <div className="wanted-results"></div>
        {mostWanted.map((ppp) => (
          <div className="cardProduct" key={ppp.id}>
            <MostWantedItem ppp={ppp} />
          </div>
        ))}
      </div>
    </>
  );
};
