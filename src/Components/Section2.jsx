import React from 'react';

const Secao = React.forwardRef(({ id, imagem }) => {
  return (
    <section id={id}>
        <div id="tituloMateriais"></div>
        <img id="img3" src={imagem} alt="" />
        <div id="textoSectionMateriais">
            <p  id="TextoMateriais">
                Nossos materiais didáticos artesanais são desenvolvidos com <span id="textDestaque">amor, excelência e com alta qualidade.</span><br />
                Acreditamos que o ensino bíblico na infância é uma semente poderosa para toda a vida.<br /><br />
                Cada peça é feita à mão para tornar o aprendizado divertido, visual e transformador.
            </p>       
        </div>
    </section>
  );
});

export default Secao;
