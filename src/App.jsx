import Navbar from "./components/Navbar.jsx";
import Input from "./components/Input.jsx";
import Task from "./components/Task.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import { useState } from "react";

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
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default App;
