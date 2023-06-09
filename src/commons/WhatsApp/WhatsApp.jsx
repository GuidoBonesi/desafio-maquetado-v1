import React from "react";
import "./WhatsApp.css";
import WhatsAppIcon from "../../assets/img/logoWhatsApp.png";

export const WhatsApp = () => {
  return (
    <div className="btn-whatsapp">
      <img
        className="button-whatsapp"
        src={WhatsAppIcon}
        alt="Icono de Whats App"
      ></img>
    </div>
  );
};
