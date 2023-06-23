// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLogin = () => {
//     // Handle login logic here
//     console.log('Logging in:', { email, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>

//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>

//       <p>
//         Not registered? <Link to="/register">Sign up</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
