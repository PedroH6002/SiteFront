import React from 'react';
import './Style/App.css';
import Header from './Components/Header';
import Secao from './Components/Section';
import Banner from './Components/Banner';
import Contato from './Components/Contato';
import ProdutoCard from './Components/ProdutoCard';
import Secao2 from './Components/Section2';
import Secao3 from './Components/Section3';
import Sobre from './Components/Sobre';

import cl from './Assets/criancaLendo.webp';
import bibliona from './Assets/Bibliona.jpg';
import bonecos from './Assets/bonecos.jpg';
import castelo from './Assets/Castelo.jpg';
import papeis from './Assets/papeis.jpg';

import reisEprofetas from './Assets/Reis e Profetas.jpg';
import sejaForte from './Assets/sejaforte.jpg';

function App() {


  // Funções de scroll
  const scrollProdutos = () => {
    window.scrollBy({
      top: 600, // Rola uma altura de tela para baixo
      behavior: 'smooth'       // Faz rolagem suave
    });
  };

  const scrollEntrega = () => {
    window.scrollBy({
      top: 1230, // Rola uma altura de tela para baixo
      behavior: 'smooth'       // Faz rolagem suave
    });

  };

  const scrollMateriais = () => {
    window.scrollBy({
      top: 2400, // Rola uma altura de tela para baixo
      behavior: 'smooth'       // Faz rolagem suave
    });
  };

  const scrollSobre = () => {
    window.scrollBy({
      top: 3150, // Rola uma altura de tela para baixo
      behavior: 'smooth'       // Faz rolagem suave
    });
  };

  return (
    <>
      <Header
        scrollProdutos={scrollProdutos}
        scrollEntrega={scrollEntrega}
        scrollMateriais={scrollMateriais}
        scrollSobre={scrollSobre}
      />

      <Secao
        id="section1"
        texto="Materiais e decorações que ensinam, encantam e transformam vidas desde a infância."
        imagem = {cl}
      />

      <Banner texto="Produtos em Destaque" id="BannerPequeno1" />

      <div className="grid-container">
        <ProdutoCard
          imagem= {bibliona}
          nome="Bibliona"
          preco="R$ 150"
        />
        <ProdutoCard
          imagem= {sejaForte}
          nome="Banner Seja forte e Corajoso"
          preco="R$ 200"
        />
        <ProdutoCard
          imagem= {bonecos}
          nome="Bonecos"
          preco="R$ 30"
        />
        <ProdutoCard
          imagem= {castelo}
          nome="Castelo no Paraíso"
          preco="R$ 250"
        />
      </div>

      <Banner texto="Contato e Entrega" id="BannerPequeno2" />

      <Contato />

      <Banner texto="Materiais" id="BannerPequeno3" />
      <Secao2
        id="section2"
        imagem= {papeis}
      />

      <Banner texto="Sobre" id="BannerPequeno4" />
      <Secao3
        id="section2"
        imagem= {reisEprofetas}
      />
      <Sobre/>


    </>
  );
}

export default App;
