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
      <div>
        <button className='uppercase cursor-pointer text-center 
                           hover:text-alice hover:bg-lavender m-10 p-3 rounded-md bg-mauve 
                           disabled:border-2 disabled:border-mauve disabled:text-mauve disabled:cursor-not-allowed disabled:bg-alice'
          name={ name }
          type={ type }
          data-testid={ id }
          disabled={ disabled }
          onClick={ onClick }
        >
          { label }
        </button>
      </div>
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