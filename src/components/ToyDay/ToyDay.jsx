import React from "react";
import "./ToyDay.css";
import { ToyDayItem } from "./ToyDayItem";
import VideoImg from "../../assets/img/miniaturaVideoFunko.png";

export const ToyDay = ({ toyDay }) => {
  console.log("toyday", toyDay);
  return (
    <div className="container-toy-day">
      <div>
        <h1 className="title-toy-day">Juguete del día</h1>
      </div>
      <div className="toy-day-flex">
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=UzcSleMvvtM&ab_channel=CollectingWithFranklynFMMcInnis"
          className="video-toy-day"
        >
          <img src={VideoImg} alt="Video juguete del día"></img>
        </a>
        <div className="box-toy-day-flex">
          <div className="product-toy-day">
            <ToyDayItem toyDay={toyDay} />
          </div>
        </div>
      </div>
    </div>
  );
};
