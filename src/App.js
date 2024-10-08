import React from 'react';
import Navbar from './components/Navbar'; // Importa o componente Navbar
import ProjectList from './components/ProjectList';
import Home from './components/Home';
import Contato from './components/Contact';
import './App.css'; // Importa os estilos gerais

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <main>
       
        <section id="about">
          <h1>Quem sou eu?</h1>
          <p>Luan Andriel é estudante de Análise e Desenvolvimento de Sistemas, com foco no desenvolvimento backend utilizando Node.js e Typescript. <break>Ele está sempre em busca de expandir seu conhecimento e habilidades, sem se limitar a essas tecnologias. </break> Focado no aprendizado contínuo e na construção de uma carreira sólida, Luan valoriza o profissionalismo em cada etapa de seu desenvolvimento.
          </p>
        </section>

        <section id="projects">
        <ProjectList /> {/* Lista de Projetos */}
        </section>

        <section id="contact">
        <Contato />
        </section>
        
      </main>
    </div>
  );
}

export default App;
