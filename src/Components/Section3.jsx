import React from 'react';

const Secao = React.forwardRef(({ id, imagem }) => {
  return (
    <section id={id}>
        <div id="tituloSobre"></div>
        <div id="textoSectionSobre">
            <p  id="TextoSobre">
                Tudo começou em 2022 com a organização do ministério infantil da igreja na qual eu frequentava.<br />
                A igreja não tinha uma separação das crianças pequenas, juniores e  adolescentes. <br /><br />
                E ao entrar na igreja  criamos e organizamos o departamento infantil que 
                era composto por crianças de 3 a 12 anos sedentas em aprender a Palavra de Deus, a bíblia, porém sem nenhum ou pouco conhecimento bíblico como base.
            </p>       
        </div>
        <img id="img3" src={imagem} alt="" />
    </section>
  );
});

export default Secao;
