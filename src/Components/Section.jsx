import React from 'react';

const Secao = React.forwardRef(({ id, texto, imagem }) => {
  return (
    <section id={id}>
      <div id="textoSection">
        <p>{texto}</p>
      </div>
      <img id="img3" src={imagem} alt="" />
    </section>
  );
});

export default Secao;
