import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Task from "./components/Task";
import Footer from "./components/Footer";
import Button from "./components/Button";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodo = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="pt-16 flex justify-center items-start">
          <div className="w-full max-w-[500px] p-4 rounded-lg shadow-lg bg-background border">
            <Input onChange={handleTodo} value={text}>
              <Button onClick={handleAddTodo}>Add Task</Button>
            </Input>
          </div>
        </div>
        {todos.map((item, index) => (
          <Task key={index} text={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
