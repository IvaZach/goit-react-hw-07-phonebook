import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from './components/Section/Section';

export const App = () => {
  return (
    <Section>
      <div>
        <h1 className="h1">PHONE BOOK</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className="h1">Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Section>
  );
};
