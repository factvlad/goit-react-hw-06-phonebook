import PropTypes from 'prop-types';
import s from "../App.module.scss"

const Filter = ({ onFilterChange, value }) => {
  return (
    <input
      className={ s.input }
      type="text"
      name="filter"
      value={ value }
      onChange={ onFilterChange }
    />
  );

}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter
