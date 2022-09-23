import { useState } from 'react';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';

const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const handleChangeFilter = e => setFilter(e.target.value);

  // const clearFilterField = () => setFilter('');

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));

    // const hasFilteredContacts =
    //   getFilteredContacts().length - 1 === 0 && filter !== '';

    // if (hasFilteredContacts) {
    //   clearFilterField();
    // }
  };

  // const getFilteredContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

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

      <ContactList onDeleteContact={deleteContact} />
    </Box>
  );
};

export default App;
