import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { ContactFormStyle, ContactFormLabel, ContactFormInput, ContactFormButton } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Перевіряю, чи контакт уже існує
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert('This contact already exists!');
      return;
    }

    const id = nanoid();

    dispatch(addContact({ id, name, number }));

    // Очищаю форму
    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyle onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <ContactFormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Number
        <ContactFormInput
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          name="number"
          required
        />
      </ContactFormLabel>

      <ContactFormButton type="submit">
        Add contact
      </ContactFormButton>
    </ContactFormStyle>
  );
};

export default ContactForm;