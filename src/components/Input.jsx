import PropTypes from "prop-types";

const Input = ({ onChange, value }) => {
  return (
    <input
      type="text"
      id="todo"
      name="todo"
      className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-button flex-1"
      placeholder="Enter task..."
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
