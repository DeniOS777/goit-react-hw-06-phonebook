import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilterValue } from '../../redux/contacts/selectors';
import { FilterLabel, InputSearch } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <InputSearch
        autoComplete="off"
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
