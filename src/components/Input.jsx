import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const {
      label,
      idFor,
      id,
      name,
      type,
      value,
      checked,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ idFor }>
        { label }
        <input
          id={ idFor }
          data-testid={ id }
          name={ name }
          type={ type }
          value={ value }
          checked={ checked }
          onChange={ onChange }
        /> 
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  idFor: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: '',
  value: '',
  cecked: false,
};

export default Input;