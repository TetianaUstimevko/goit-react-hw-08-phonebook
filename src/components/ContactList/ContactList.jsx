import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactListStyle } from './ContactList.styled';

const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStyle>
      {filterContacts.map((contact) => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        
        />
      ))}
    </ContactListStyle>
  );
};

export default ContactList;
