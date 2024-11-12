import React, { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      if (response.status === 200) {
        setTodos(response.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []); // Empty dependency array ensures this runs once when the component mounts.

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {todos && todos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{todo.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                <p><strong>User ID:</strong> {todo.userId}</p>
                <p><strong>Post ID:</strong> {todo.id}</p>
                <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Pending'}</p>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No todo items found.</div>
      )}
    </div>
  );
}

export default Todo;
