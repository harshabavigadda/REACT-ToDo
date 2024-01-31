import React from 'react';

const Todo = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
        className="mr-2"
      />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
      <button onClick={() => handleDelete(todo.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default Todo;
