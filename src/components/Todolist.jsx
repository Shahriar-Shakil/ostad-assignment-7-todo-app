import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Todo List - Module 7 assignment
      </h1>

      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          placeholder="Enter a new task"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </form>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo}</span>
              <button
                className="text-red-500"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
};

export default TodoList;
