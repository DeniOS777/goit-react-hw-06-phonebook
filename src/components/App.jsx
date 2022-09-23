import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';

const App = () => {
  // const clearFilterField = () => setFilter('');

  // const deleteContact = contactId => {
  //   setContacts(state => state.filter(({ id }) => id !== contactId));

  //   const hasFilteredContacts =
  //     getFilteredContacts().length - 1 === 0 && filter !== '';

  //   if (hasFilteredContacts) {
  //     clearFilterField();
  //   }
  // };

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
      <ContactList />
    </Box>
  );
};

export default App;
