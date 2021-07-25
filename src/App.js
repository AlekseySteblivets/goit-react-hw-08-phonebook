import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { getIsloadingContacts, fetchContact } from './redux/phonebooks';
// import * as phonebookOperations from './redux/phonebooks/phonebooks-operations';
// import * as phonebookSelectors from './redux/phonebooks/phonebooks-selectors';

import HomeView from './views/HomeView';
// import Header from './components/Header';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Contacts from './views/Contacts';
import AppBar from './components/UserMenu/AppBar';
import { authOperations } from './redux/auth';



class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
  }

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
        {/* <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        {this.props.isloadingContacts && <h1>loading...</h1>}
        <ContactList /> */}

      </div>
    )
  }

}


const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);

// const mapStateToProps = state => ({
//   isloadingContacts: getIsloadingContacts(state),
// })


// const mapDispatchToProps = dispatch => ({
//   fetchContact: () => dispatch(fetchContact())
// })