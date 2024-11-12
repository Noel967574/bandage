import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext"; // Correct import

function Blogpage() {
  const [friends, setFriends] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { monthlyAllowance } = useContext(AuthContext);  // Accessing context

  const getFriends = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if (response.status === 200) {
        setFriends(response.data);
        setLoading(false); // Stop loading once data is fetched
      }
    } catch (error) {
      setError(error.message); // Capture error message
      setLoading(false);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  // If loading, show loading spinner or message
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // If there's an error, display it
  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {friends && friends.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
              <p className="text-gray-600 text-base mb-4">{blog.body}</p>
              <div className="text-sm text-gray-500">
                <p><strong>User ID:</strong> {blog.userId}</p>
                <p><strong>Post ID:</strong> {blog.id}</p>
                <h1>Allowance: N{monthlyAllowance}</h1>  {/* Displaying monthlyAllowance */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No blog posts found.</div>
      )}
    </div>
  );
}

export default Blogpage;
