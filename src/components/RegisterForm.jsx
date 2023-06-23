// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const RegisterForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleRegister = () => {
//     // Handle registration logic here
//     console.log('Registering user:', { username, email, password });
//   };

//   return (
//     <div>
//       <h2>Register</h2>

//       <form>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>

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

//         <button type="button" onClick={handleRegister}>
//           Register
//         </button>
//       </form>

//       <p>
//         Already registered? <Link to="/login">Sign in</Link>
//       </p>
//     </div>
//   );
// };

// export default RegisterForm;