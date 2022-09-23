import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChangeFilter = e => setFilter(e.target.value);

  // const clearFilterField = () => setFilter('');

  const addContact = (name, number) => {
    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      return toast.info(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(state => [newContact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(({ id }) => id !== contactId));

    // const hasFilteredContacts =
    //   getFilteredContacts().length - 1 === 0 && filter !== '';

    // if (hasFilteredContacts) {
    //   clearFilterField();
    // }
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Box p={4}>
      <Box as="h1" mb={5}>
        Phonebook ☎️
      </Box>

      <ContactForm onSubmit={addContact} />

      <Box as="h2" mb={3}>
        Contacts
      </Box>

      <Filter filter={filter} onChange={handleChangeFilter} />

      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};

export default App;
