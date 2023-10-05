import { useEffect } from 'react';
import { UserForm } from './Form/Form';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlise';

export const App = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const dispatch = useDispatch();
  // console.log(storeContactList)

  const filter = '';

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      // setContacts(JSON.parse(savedContacts));
      dispatch(addContact(JSON.parse(savedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  
  // const updateFilter = filterText => {
  //   setFilter(filterText);
  // };

  

  const filteredContacts = contacts.filter(contact => {
    if (!contact || !contact.name) {
      console.error('Invalid contact:', contact);
      return false;
    }
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <section>
      <h1>Phonebook</h1>
      <UserForm/>

      <div>
        <h2>Contacts</h2>
        <ContactFilter filter={filter} updateFilter={filteredContacts} />
        <ContactList filteredContacts={filteredContacts} />
      </div>
    </section>
  );
};
