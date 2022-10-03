import { useSelector } from 'react-redux';
import {
  selectorContacts,
  selectorFilterValue,
} from 'redux/contacts/contactsSelectors';

export const useGetFilteredContacts = () => {
  const filterValue = useSelector(selectorFilterValue);
  const contacts = useSelector(selectorContacts);
  const normalizeFilter = filterValue.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
