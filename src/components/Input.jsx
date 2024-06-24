const Input = () => {
  const handleAddTask = () => {
    // Implement task addition logic here
    console.log("Task added!");
  };

  return (
    <div className=" pt-16 flex justify-center items-start  ">
      <div className="w-full max-w-[500px]   p-4 rounded-lg shadow-lg bg-background border">
        <label htmlFor="todo" className="text-lg font-bold mb-2 block"></label>
        <div className="flex">
          <input
            type="text"
            id="todo"
            name="todo"
            className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-button flex-1"
            placeholder="What's on your mind today?"
          />
          <button
            type="button"
            className="ml-2 px-4 py-2 bg-button text-text rounded-lg shadow-md hover:bg-button-hover focus:outline-none focus:ring-2 focus:ring-primary-dark"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
