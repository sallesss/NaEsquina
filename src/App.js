import React from 'react';
import lojaImg from './icons/loja.png';
import chatImg from './icons/chat.png';
import carroImg from './icons/car.png';
import userImg from './icons/us.png';
import bannerImg from './icons/bann.jpeg';
import './App.css';

function App() {
  return (
    <body>
      <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
      <header class="App-header">
        <main>
          <div class="info">
            <img class="icon" src={lojaImg} alt="loja img" />
            <h1>NaEsquina</h1>
          </div>
          <div class="redes">
            <ul>
              <li><a href=" "><img src={chatImg} alt="chat img" /></a></li>
              <li><a href=" "><img src={carroImg} alt="carro img" /></a></li>
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
        <div class="slider">
          <img src={bannerImg} alt="banner img" />
          <img src={bannerImg} alt="banner img" />
        </div>
      </div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
      <script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
      <script type="text/javascript" src=""></script>
    </body>
  );
}
export default App;


