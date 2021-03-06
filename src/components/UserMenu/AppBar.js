import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';


const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        borderBotton: '1px, solid #2A363B',
    },
}

const AppBar = ({ isAuthenticated }) => (
    <header style={styles.header} >
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);


const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),

});

export default connect(mapStateToProps)(AppBar);
