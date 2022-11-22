import React from 'react';
import lojaImg from './icons/loja.png';
import lupaImg from './icons/lupa.png';
import carroImg from './icons/carro.png';
import userImg from './icons/user1.png'
import './App.css';

function App() {
  return (
    <body>
      <header className="App-header">
        <main>
          <div className="info">
            <img className="icon" src={lojaImg} alt="loja img" />
            <h1>NaEsquina</h1>
          </div>
          <div className="redes">
            <ul>
              <li><a href=" "><img src={lupaImg} alt="lupa img" /></a></li>
              <li><a href=" "><img src={carroImg} alt="carro img" /></a></li>
              <li><a href=" "><img src={userImg} alt="user img" /></a></li>
            </ul>
          </div>
          <div className="App">
          </div>
        </main>
      </header>
    </body>
  );
}
export default App;


