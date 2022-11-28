import React from 'react';
import lojaImg from './icons/loja.png';
import chatImg from './icons/chat.png';
import favImg from './icons/fav2.png';
import userImg from './icons/us.png';
import loja1Img from './icons/loja1.png';
import eadImg from './icons/ead.png';
import restImg from './img/merc.jpg';
import esqImg from './img/esq.jpg';
import barbImg from './img/barb.jpg';
import esquinaImg from './icons/esquina.png';
import { Marousel } from './Components/Carousel';
import './App.css';

function App() {
  return (
    <body>
      <header class="App-header">
        <main>
          <div class="info">
            <img class="icon" src={lojaImg} alt="loja img" />
            <h1>NaEsquina</h1>
          </div>
          <div class="redes">
            <ul>
              <li><a href=" "><img src={chatImg} alt="chat img" /></a></li>
              <li><a href=" "><img src={favImg} alt="fav img" /></a></li>
              <li><a href=" "><img src={userImg} alt="user img" /></a></li>
            </ul>
          </div>
        </main>
      </header>
      <main class="main2 menu-urls">
        <div class="headerbaixo">
          <div class="menu">
            <ul>
              <li><a href=" ">INÍCIO</a></li>
              <li><a href=" ">PRODUTOS</a></li>
              <li><a href=" ">CATEGORIAS</a></li>
              <li><a href=" ">FALE CONOSCO</a></li>
            </ul>
          </div>
          <div class="busca">
            <input placeholder="Buscar" type="text"></input>
          </div>
        </div>
      </main>
      <div class="main2">
        <Marousel />
      </div>
      <div class="main2"> <noscript>main2,main3 são as colunas</noscript>
        <div class="content texto">
          <h1>Descubra novos <strong>empreendimentos</strong> perto de você!</h1>
          <p>Cadastre ou pesquise por negócios locais conhecidos ou desconhecidos.</p>
          <div class="main3 texto-bloco">
            <img src={loja1Img} alt="loja img" />
            <h3><strong>Restaurantes</strong></h3>
            <p>São empreendimentos mais estruturados
              que já possuem lojas físicas.
            </p>
          </div>
          <div class="main3 texto-bloco">
            <img src={esquinaImg} alt="esquina img" style={{ marginTop: "6em" }} />
            <h3><strong>Esquinas</strong> Locais</h3>
            <p>São empreendimentos menos estruturados
              que possuem apenas o endereço cadastrado.
            </p>
          </div>
          <div class="main3 texto-bloco">
            <img src={eadImg} alt="ead img" />
            <h3><strong>E-commerce</strong> Virtuais</h3>
            <p>São empreendimentos que atendem apenas pela internet.</p>
          </div>
        </div>
      </div>
      <div class="main2 imagens-bloco">
        <div class="content" style={{ marginLeft: "24%", float: "left" }}>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={restImg} alt="rest img" />
            <p><b>Mercadinho</b></p>
            <p>Encontre mercadinhos por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={esqImg} alt="esq img" />
            <p><b>Lanchonete</b></p>
            <p>Encontre laconhetes por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={barbImg} alt="barb img" />
            <p><b>Barbearia</b></p>
            <p>Encontre barbearias por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={restImg} alt="rest img" />
            <p><b>Mercadinho</b></p>
            <p>Encontre mercadinhos por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={esqImg} alt="esq img" />
            <p><b>Lanchonete</b></p>
            <p>Encontre laconhetes por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={barbImg} alt="barb img" />
            <p><b>Barbearia</b></p>
            <p>Encontre barbearias por endereço</p>
          </div>
          

        </div>
      </div>
    </body>
  );
}
export default App;
