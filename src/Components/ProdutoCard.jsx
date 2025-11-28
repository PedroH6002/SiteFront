import React from 'react';

const ProdutoCard = ({ imagem, nome, preco }) => {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} className="imagensProdutos" />
      <h2>{nome}</h2>
      <span className="preco">{preco}</span>
    </div>
  );
};

export default ProdutoCard;
