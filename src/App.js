import React from 'react';
import lojaImg from './icons/loja.png';
import chatImg from './icons/chat.png';
import favImg from './icons/fav2.png';
import userImg from './icons/us.png';
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
      <div class="main2">
        <div class="content texto">
          <h1>Descubra novos <strong>empreendimentos</strong> perto de você!</h1>
          <p>Cadastre ou pesquise por negócios locais conhecidos ou desconhecidos.</p>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </body>
  );
}
export default App;
