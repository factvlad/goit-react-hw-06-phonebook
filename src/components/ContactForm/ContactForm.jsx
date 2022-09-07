import React, { useState } from 'react';
import s from "../App.module.scss"

const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const data = { name, number };

  const OnSubmit = e => {
    e.preventDefault();
    props.onSubmitProp(data);
    reset();
  };

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Something wrong');
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={ s.form }
      onSubmit={ OnSubmit }>
      <input
        type="text"
        id={ name }
        name="name"
        value={ name }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={ onChange }
      />
      <input
        type="tel"
        name="number"
        value={ number }
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={ onChange }
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm
