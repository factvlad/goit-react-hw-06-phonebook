import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContacts, removeContacts } from '../redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import s from "./Contacts.module.scss"

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const formSubmitHandler = payload => {
    const findSimilarContact = contacts.find(
      contact => contact.name === payload.name
    );

    if (findSimilarContact) {
      alert('Contact already exists');
    } else {
      const action = addContacts(payload);
      dispatch(action);
    }
  };
  const deleteContact = payload => {
    const action = removeContacts(payload);
    dispatch(action);
  };

  const filterChange = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <div className={ s.container }>
      <h2>PhoneBook</h2>
      <ContactForm onSubmitProp={ formSubmitHandler } />
      <h2>Contacts</h2>
      <Filter value={ filter } onFilterChange={ filterChange } />
      <>
        <ContactList
          contactsList={ getFilteredContacts() }
          onDeleteContact={ deleteContact }
        />
      </>
    </div>
  );
};
