import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { FilterLabel, InputSearch } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <InputSearch
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      🔎
    </>
  );
};

export default Filter;
