import React from 'react';
import "../App.css"
import Node_ts from "../images/Node_ts.png"; 

const ProjectList = () => {
    return (
        <section id="projetos" style={{ padding: '300px 20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <h1>Meus Projetos</h1>
        <div className="project-list">
        <div className="project" style={projectStyle}>
             <img src={Node_ts} style={imageStyle} />
                <h3>Codificador/Decodificador ASCII.</h3>
                <p>Um codificador e decodificador de strings utilizando a Tabela ASCII.</p>
                <a href="https://github.com/luan-lima1/Code-Decoder-ASCII" target="_blank" rel="noopener noreferrer" className="project-button">Ver no GitHub</a>
            </div>
            <div className="project" style={projectStyle}>
            <img src={Node_ts} style={imageStyle} />
                <h3>Validador de Boletos Bancários e de Convênio.</h3>
                <p> Esta API recebe os números (sem pontos, traços e espaços) da linha digitável de boletos bancários, ou boletos de convênios, e se válidos, retorna os valores da solicitação.</p>
                <a href="https://github.com/luan-lima1/E-boleto-validation-api/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="project-button">Ver no GitHub</a>
            </div>
            <div className="project" style={projectStyle}>
            <img src={Node_ts} style={imageStyle} />
                <h3>Crud-Prisma</h3>
                <p>Este projeto backend para fins de estudo e prática, consiste na implementação de um CRUD para cadastro de usuários, utilizando Node.js, Typescript e Prisma.</p>
                <a href="https://github.com/luan-lima1/node-prisma-api" target="_blank" rel="noopener noreferrer" className="project-button">Ver no GitHub</a>
                </div>
            </div>
        </section>
    );
};

const projectStyle = {
    flex: '1 1 30%',
    margin: '1rem',
    minWidth: '250px',
    maxWidth: '450px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
};

const imageStyle = {
    width: '100%', 
    height: 'auto', 
    borderRadius: '15px', 
};

export default ProjectList;