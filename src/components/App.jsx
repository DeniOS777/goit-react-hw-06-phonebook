import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { useSelector } from 'react-redux';
import { selectorContacts } from 'redux/contacts/contactsSelectors';

const App = () => {
  const contacts = useSelector(selectorContacts);

  return (
    <Box p={4}>
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm />
      <Box as="h2" mb={3}>
        Contacts
      </Box>
      <Filter />

      {contacts.length > 0 && <ContactList />}
    </Box>
  );
};

export default App;
