import React from 'react';
import minhaFoto from "../images/minhaFoto.jpeg" 

function Home() {
    return (
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="text-content">
            <h1>Bem-vindo(a) ao meu Portfólio!</h1>
            <p>Que bom te ter por aqui!</p>
          </div>
          <div className="image-content">
            <img src={minhaFoto} alt="teste" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;
