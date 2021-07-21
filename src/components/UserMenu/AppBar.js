import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';


const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

export default AppBar;
