import { getContacts, getFilterValue } from '../redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const useFilteredContacts = () => {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filterValue.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
