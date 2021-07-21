import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthNav = () => (
    <div>
        <NavLink to="/register" exact> регистрация</NavLink>
        <NavLink to="/login"> логин</NavLink>
    </div>
)

export default AuthNav;