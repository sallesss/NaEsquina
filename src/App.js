import React from 'react';
import lojaImg from './icons/loja.png';
import chatImg from './icons/chat2.png';
import favImg from './icons/fav.png';
import userImg from './icons/user.png';
import loja1Img from './icons/loja1.png';

import eadImg from './icons/ead.png';
import restImg from './img/merc.jpg';
import esqImg from './img/esq.jpg';
import barbImg from './img/barb.jpg';
import padImg from './img/pad.jpg';
import bcImg from './img/bc.jpeg';
import acaiImg from './img/acai.jpg';

import salesLogo from './img/pizza.jpg';
import marioLogo from './img/acai.png';
import logoLogo from './img/hamb.png';
import pedrinLogo from './img/hot.png';

import faceLogo from './img/face.png';
import instaLogo from './img/insta.png';
import whatLogo from './img/what.png';

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
          </div>
          <div class="redes">
            <ul>
              <li><a href=" "><img src={favImg} alt="fav img" /></a></li>
              <li><a href=" "><img src={chatImg} alt="chat img" /></a></li>
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
            <h3><strong>Estabelecimentos</strong></h3>
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
            <p><b>Mercearia</b></p>
            <p>Encontre mercearias por endereço</p>
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
            <img src={padImg} alt="pad img" />
            <p><b>Padaria</b></p>
            <p>Encontre padarias por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={bcImg} alt="bc img" />
            <p><b>Borracharia</b></p>
            <p>Encontre borracharias por endereço</p>
          </div>
          <div class="main3 texto-bloco imagem-bloco">
            <img src={acaiImg} alt="acai img" />
            <p><b>Açaí</b></p>
            <p>Encontre pontos de açaí por endereço</p>
          </div>


        </div>
      </div>
      <div class="main2 bloco-logos">
        <div class="content">
          <div class="main4">
            <img src={salesLogo} alt="sales logo"></img>
          </div>
          <div class="main4">
            <img src={marioLogo} alt="mario logo"></img>
          </div>
          <div class="main4">
            <img src={logoLogo} alt="davys logo"></img>
          </div>
          <div class="main4">
            <img src={pedrinLogo} alt="pedrin logo"></img>
          </div>
        </div>
      </div>
      <footer>
        <div class="main2 footer">
          <div class="content">
            <div class="main4">
              <h3>Populares</h3>
              <p>-Política Para Vendedores Locais</p>
              <p>-Sustentabilidade E Impacto Social</p>
              <p>-Carreiras</p>
            </div>
            <div class="main4">
              <h3>Tags</h3>
              <p>-Como começar</p>
              <p>-Empreendimento Inicial</p>
              <p>-Grande Negócio</p>
            </div>
            <div class="main4">
              <h3>Sobre</h3>
              <p>A <b>NaEsquina</b> atua como uma iniciativa
                para diferentes tipos de empreendimentos, os
                residenciais, e-commerce e restaurantes, sempre
                com respeito, sustentabilidade e excelência.</p>
            </div>
            <div class="main4">
              <h3>Contatos</h3>
              <p><img src={faceLogo} alt='face logo' />  NaEsquina</p>
              <p><img src={instaLogo} alt='insta logo' /> @NaEsquina</p>
              <p><img src={whatLogo} alt='what logo' /> 91 98959-6330</p>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div class="main2 footer2">
          <div class="content">
            <p>₢ Este site foi criado e editado por naesquina-devs <h8>Obrigado!</h8> </p>
          </div>
        </div>
      </footer>

    </body>
  );
}
export default App;
