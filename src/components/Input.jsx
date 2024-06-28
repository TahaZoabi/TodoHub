import PropTypes from "prop-types";

const Input = ({ children }) => {
  return (
    <>
      <label htmlFor="todo" className="text-lg font-bold mb-2 block "></label>
      <div className="flex">
        <input
          type="text"
          id="todo"
          name="todo"
          className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-button flex-1"
          placeholder=" What's on your mind today?"
        />
        {children}
      </div>
    </>
  );
};

Input.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Input;
