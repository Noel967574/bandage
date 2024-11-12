
// import React, {
  
  
  
  
  
  

// import React, { useState } from "react";
      

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with", username, password);
    
//     fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username,
//         password,
//         expiresInMins: 30, // optional, defaults to 60
//       }),
//       credentials: "include",
//     })
//       .then((res) => res.json())
//       .then(console.log);
//   };

//   return (
//     <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md'>
//       <input
//         type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder='Username'
//         className='mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400'
//       />
//       <input
//         type='password'
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder='Password'
//         className='mb-4 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400'
//       />
//       <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
//         Log In
//       </button>
//     </form>
//   );
// }

// export default function App() {
//   return (
//     <div className='flex items-center justify-center h-screen bg-gray-100'>
//       <div className='w-full max-w-sm'>
//         <h1 className='text-2xl font-bold mb-6 text-center'>Login</h1>
//         <LoginForm />
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import FadeLoader from "react-spinners/FadeLoader";
// import axios from "axios";

// function LoginForm() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [userInfo, setUserInfo] = useState(null);
//     const [isLogin, setIsLogin] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Logging in with", username, password);
//         setIsLoading(true);
//         try {
//             const response = await axios.post("https://dummyjson.com/auth/login", {
//                 username,
//                 password,
//             });
//             if (response.status === 200) {
//                 console.log(response.data);
//                 const info = response.data;
//                 setUserInfo(info);
//                 setIsLogin(true);
//             }
//         } catch (error) {
//             console.log(error.message);
//         }
//         setIsLoading(false);
//     };

//     return (
//         <>
//             {isLogin ? null : (
//                 <div className="flex items-center justify-center min-h-screen bg-gray-100">
//                     <form
//                         onSubmit={handleSubmit}
//                         className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
//                     >
//                         {isLoading && (
//                             <div className="flex justify-center mb-4">
//                                 <FadeLoader color={"#4A90E2"} size={150} aria-label='Loading Spinner' data-testid='loader' />
//                             </div>
//                         )}
//                         <div className="mb-4">
//                             <input
//                                 type='text'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 placeholder='Username'
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <input
//                                 type='password'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 placeholder='Password'
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <button
//                                 type="submit"
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Log In
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}
//             {userInfo && (
//                 <div className="flex flex-col items-center">
//                     <img src={userInfo.image} alt="User" className="w-24 h-24 rounded-full mb-4" />
//                     <h1 className="text-xl font-semibold">{userInfo.firstName + " " + userInfo.lastName}</h1>
//                 </div>
//             )}
//         </>
//     );
// }












// <link rel="stylesheet" href="./App.css">

// import React from "react";
// import LoginForm from "../src/components/LoginForm.jsx"; // Adjust the path as necessary
// import FriendsList from "./componet/FrindsList.jsx";

// function App() {
//   return (
//     <div className="App">
//       <h1>My Application</h1>
//       <LoginForm />
//       <FriendsList/>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import './index.css';
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginForm from "./componet/LoginForm";
// import FriendsList from "./componet/FrindsList";
// import ErrorPage from './Pages/errorpage/error';
// import Todo from './Pages/errorpage/blogpage/todo.jsx';
// import { AuthProvider } from './context/AuthContext';  // Correct import of AuthProvider
// import Blogpage from './Pages/errorpage/blogpage/Blogs.jsx';
// import PrivateRoute from "./pivateroute.jsx"

// function App() {
//   return (
//     <AuthProvider>  {/* Corrected AuthProvider */}
//       <Router>
//         <Routes>
//           <Route 
//              path="/"
//              element={<PrivateRoute>
//                <FriendsList/>
//              </PrivateRoute>
//              }
//               errorElement={<ErrorPage />} 
//             />
//             <Route 
//             path="/"
//              element={<LoginForm />}
//               errorElement={<ErrorPage />} />
//           <Route 
//             path="/friends" 
//             element={<FriendsList />} 
//             errorElement={<ErrorPage />} />
//           <Route
//              path="/blogs" 
//              element={<Blogpage/>} 
//              errorElement={<ErrorPage />} />
//           <Route 
//             path="/todos" 
//             element={<Todo />} 
//             errorElement={<ErrorPage />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;














import React from 'react'
import Navbar from './navbar/nav.jsx/nav'
import './App.css'
import './index.css'
import FisrtShow from './population/fisrtshow'

export default function App() {
  return (
    <div>
      <header className='flex w-full'>
        <Navbar/>
        
      </header>
      <FisrtShow/>
    </div>
  )
}
