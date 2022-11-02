import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveDataToState(this.state.name, this.state.number);
    e.target.reset();
  };
  saveDataFromInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          {' '}
          Name
          <Input
            onChange={this.saveDataFromInput}
            placeholder="enter name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          {' '}
          Number
          <Input
            onChange={this.saveDataFromInput}
            placeholder="enter phone number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button round="50%" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  saveDataToState: PropTypes.func.isRequired,
};
