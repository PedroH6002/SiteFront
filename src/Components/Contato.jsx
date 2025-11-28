import React from 'react';

import delivery from '../Assets/delivery.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import pinLogalizacao from '../Assets/pin-de-localizacao.png';
import relogio from '../Assets/relogio.png';
import whatsapp from '../Assets/whatsapp.png';


const Contato = () => {
  return (
    <div>
      <div className="bannerContato1" id="bannerContato1-1">
        <p id="textEntrega">
          Receba seu pedido no conforto da sua casa! Trabalhamos com parceiros de entrega confiáveis para garantir que seu pedido chegue com agilidade e em perfeito estado.
        </p>
        <img id="img21" src= {delivery} alt="Entrega" />
      </div>

      <div className="bannerContato2" id="bannerContato2-1">
        <img id="img31" src= {relogio} alt="Relógio" />
        <p id="textEntrega">
          Tempo estimado de entrega: 5 dias (pode variar conforme a localidade e o volume de pedidos).
        </p>
      </div>

      <div className="bannerContato1" id="bannerContato1-2">
        <p id="textEntrega">
          Verifique se o seu endereço está dentro da nossa área de entrega antes de finalizar o pedido.
        </p>
        <img id="img32" src={pinLogalizacao} alt="Localização" />
      </div>

      <div id="divContato">
        <a href="https://api.whatsapp.com/send?phone=+5511972529894&text=Desejo%20fazer%20uma%20encomenda!">
          <img className="imgContato" src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com/casadeoracaoresgate">
          <img className="imgContato" src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/casadeoracaoresgate.com.br">
          <img className="imgContato" src={facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Contato;
