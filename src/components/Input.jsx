import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, value, children }) => {
  return (
    <>
      <label htmlFor="todo" className="text-lg font-bold mb-2 block">
        What's on your mind today?
      </label>
      <div className="flex">
        <input
          type="text"
          id="todo"
          name="todo"
          className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-button flex-1"
          placeholder="Enter task"
          value={value}
          onChange={onChange}
        />
        {children}
      </div>
    </>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Input;
