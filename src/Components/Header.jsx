import React from 'react';
import loginBoneco from '../Assets/loginBoneco-Photoroom.png';

const Header = ({ scrollProdutos, scrollEntrega, scrollMateriais, scrollSobre }) => {
    return (
      <header>
        <div id="headerIn">
          <a href="#" onClick={scrollProdutos}>Produtos</a>
          <a href="#" onClick={scrollEntrega}>Entrega</a>
          <a href="#" onClick={scrollMateriais}>Materiais</a>
          <a href="#" onClick={scrollSobre}>Sobre</a>
        </div>
        <a href="Forms.html" target="_blank">
          <img src= {loginBoneco} id="carrinho" alt="Carrinho" />
        </a>
      </header>
    );
  };
  
  export default Header;