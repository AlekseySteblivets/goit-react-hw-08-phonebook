import React, { Component } from "react";
import { connect } from "react-redux";
import { getIsloadingContacts, fetchContact } from '../redux/phonebooks';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

class Contacts extends Component {
    state = {
    };

    componentDidMount() {
        this.props.fetchContact();
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                <Filter />
                {this.props.isloadingContacts && <h1>loading...</h1>}
                <ContactList />

            </div>
        )
    }


}
const mapStateToProps = state => ({
    isloadingContacts: getIsloadingContacts(state),
})

const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
