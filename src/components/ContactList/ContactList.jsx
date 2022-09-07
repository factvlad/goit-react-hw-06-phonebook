import PropTypes from 'prop-types';
import s from "../App.module.scss"

const ContactList = ({ contactsList, onDeleteContact }) => {
  return (
    <ul className={ s.contacts }>
      { contactsList.map(({ name, number, id }) => (
        <li className={ s.contacts } key={ id }>
          <span className={ s.btnDel }
            onClick={ () => {
              onDeleteContact(id);
            } }>X</span>
          <span className={ s.name }>
            { name } :
          </span>
          { number }

        </li>
      )) }
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList
