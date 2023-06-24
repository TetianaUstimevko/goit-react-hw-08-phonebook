import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactItemList, ContactItemText, ContactItemButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItemList>
      <ContactItemText>
        {name}............
        {number}
      </ContactItemText>
      <ContactItemButton type="button" onClick={handleDelete}>
        Delete
      </ContactItemButton>
    </ContactItemList>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;