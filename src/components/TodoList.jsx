import React, { useState } from 'react';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <div>
        {todos.map((todo, index) => (
          <TodoCard
            key={index}
            title={todo.title}
            description={todo.description}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
