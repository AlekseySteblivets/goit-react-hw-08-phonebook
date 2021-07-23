import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div>
        <img src={avatar} alt="" width="32" />
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>Выйти</button>
    </div>

)

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    // avatar:
});

const mapDispatchToProps = {
    onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);