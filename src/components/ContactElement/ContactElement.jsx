import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactElement.styled';

export function ContactElement({ name, number, id, deleteContact }) {
  return (
    <Item>
      {name}: {number}
      <Button onClick={deleteContact} data-id={id}>
        Delete contact
      </Button>
    </Item>
  );
}

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
