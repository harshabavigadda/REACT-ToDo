// Author Harshavardhan B
import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    
    <div className="max-w-md mx-auto p-4 bg-[#9ca3af] rounded shadow mt-5">
      <h1 className="text-2xl font-bold text-center mb-3">ToDo List</h1>
      <div className='flex mb-2'>
        <input type="text" 
        placeholder='Add a Todo...'
        className='w-full p-2 border rounded shadow'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}
        className=" bg-blue-500 text-white p-2 rounded shadow"
        >Add</button>
    </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;
