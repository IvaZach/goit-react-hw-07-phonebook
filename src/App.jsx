import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <div>
        <h1 className="h1">PHONE BOOK</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className="h1">Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading contacts...</p>}
        <ContactList />
        {error && <h3>{error}</h3>}
      </div>
    </Section>
  );
};
