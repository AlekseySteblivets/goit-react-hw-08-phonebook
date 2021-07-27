import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => (
    <div>
        <NavLink to="/" exact> Главная</NavLink>
        {isAuthenticated && (
            <NavLink to="/contacts"> Заметки
            </NavLink>)}

    </div>
)

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
})
export default connect(mapStateToProps)(Navigation);