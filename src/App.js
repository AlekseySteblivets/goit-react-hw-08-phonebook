import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Contacts from './views/Contacts';
import AppBar from './components/UserMenu/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

class App extends Component {
  state = {
  }

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            component={Contacts}
            redirectTo="/login"
          />
        </Switch>

      </div>
    )
  }

}


const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);