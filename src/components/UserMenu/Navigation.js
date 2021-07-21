import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div>
        <NavLink to="/" exact> Главная</NavLink>
        <NavLink to="/contacts"> Заметки</NavLink>
    </div>
)

export default Navigation;