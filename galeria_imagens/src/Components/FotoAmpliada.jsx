import React from "react";

const FotoAmpliada = ({ foto, setFotoAmpliada }) => {
  return (
    <div
      className="foto-ampliada-bakdrop"
      onClick={() => setFotoAmpliada(null)}
    >
      <div className="foto-ampliada-bakdrop">
        <img src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  );
};

export default FotoAmpliada;
