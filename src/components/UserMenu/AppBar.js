import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';


const AppBar = ({ isAuthenticated }) => (
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);


const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),

});

export default connect(mapStateToProps)(AppBar);
