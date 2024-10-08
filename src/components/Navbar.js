import React, { useState } from 'react';
import '../Navbar.css'; // Estilos da navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <ul className={`navbar-links`}>
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre Mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;