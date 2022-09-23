import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsActions';
import { getFilterValue, getContacts } from '../../redux/contacts/selectors';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
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

export default ContactList;
