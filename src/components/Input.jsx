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
      placeholder,
      value,
      onChange,
    } = this.props;

    return (
      <div>
        <label htmlFor={ idFor }>
          { label }
          <input className='p-2 focus:outline-none border-dotted border-b-2 border-mauve bg-alice '
            id={ idFor }
            data-testid={ id }
            name={ name }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
          /> 
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  idFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: '',
  value: '',
  label: '',
  placeholder: '',
};

export default Input;