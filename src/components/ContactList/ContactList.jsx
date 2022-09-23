// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizeFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ContactsList>
  );
};

// ContactList.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
