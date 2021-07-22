import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div>
        <img src={avatar} alt="" width="32" />
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>logout</button>
    </div>

)

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    // avatar:
})

export default connect(mapStateToProps)(UserMenu);