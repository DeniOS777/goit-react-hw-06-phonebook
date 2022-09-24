import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/contactsActions';
import { deleteContact } from '../../redux/contacts/contactsReducer';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';
import { useFilteredContacts } from '../../hooks/useFilteredContacts';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useFilteredContacts();

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

export default ContactList;
