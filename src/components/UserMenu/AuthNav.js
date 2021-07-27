import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthNav = () => (
    <div>
        <NavLink to="/register" exact> Регистрация</NavLink>
        <NavLink to="/login"> Логин</NavLink>
    </div>
)

export default AuthNav;