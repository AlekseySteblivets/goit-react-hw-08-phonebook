import React from "react";
import { connect } from "react-redux";
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { getVisibleContacts, deleteContact } from '../../redux/phonebooks';
// import * as phonebookOperations from '../../redux/phonebooks/phonebooks-operations';
// import * as phonebookSelectors from '../../redux/phonebooks/phonebooks-selectors';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className="Contact-container">
            <ul >
                {contacts.map(contact => (
                    <li className={styles.contactList} key={uuidv4()}>{contact.name} : {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)} >Delete</button>
                    </li>))
                }
            </ul>
        </div>
    )
};

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,

        })
    ),
};

const mapStateToProps = (state) => ({
    contacts: getVisibleContacts(state),
});


const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(deleteContact(id)),

});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);