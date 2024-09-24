// components/header/NavBar.jsx
import React from 'react';
import NavItem from './NavItem';

export default function NavBar  () {
    return (
        <ul className="flex justify-between items-center space-x-5 mr-24">
            <NavItem href="/">Início</NavItem>
            <NavItem href="/#beneficios">Benefícios</NavItem>
            <NavItem href="/#historia">História</NavItem>
            <NavItem href="/#depoimentos">Depoimentos</NavItem>
            <NavItem href="/#contato">Contato</NavItem>
        </ul>
    );
};
