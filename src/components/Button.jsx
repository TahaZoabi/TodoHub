// Button.jsx
import PropTypes from "prop-types";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="ml-2 px-4 py-2 bg-button text-text rounded-lg shadow-md hover:bg-button-hover focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
