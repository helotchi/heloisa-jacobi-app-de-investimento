import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  render() {
    const {
      id,
      label,
      name,
      type,
      disabled,
      onClick,
    } = this.props;

    return (
      <button
        name={ name }
        type={ type }
        data-testid={ id }
        disabled={ disabled }
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: '',
};

export default Button;