import React from 'react';
import fofos from '../Assets/fofos.jpg';
const Sobre = () => {
  return (
    <>
      <img id="img1" src={fofos} alt="Imagem sobre a Nani Visuais" />
      <div id="SobreBaixo">
        <p id="TextoSobreBaixo">
          Para facilitar a compreensão das crianças pequenas tivemos que criar cartazes tipo visuais com as histórias da bíblia,
          cada história se desenvolvia de forma entendível para os menores e com o passar do tempo as pessoas de outras igrejas vieram perguntar se eu poderia confeccionar os materiais para elas também.
          Assim nasceu a Nani Visuais.
        </p>
      </div>
    </>
  );
};

export default Sobre;
