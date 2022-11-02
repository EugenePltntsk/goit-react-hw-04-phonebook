import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { Input } from './Filter.styled';

export function Filter({ value, change }) {
  return (
    <Label>
      Find contacts by name
      <Input name="filter" value={value} onChange={change} type="text" />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
