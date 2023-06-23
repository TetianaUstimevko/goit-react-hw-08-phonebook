import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
import { fetchContacts } from 'redux/operations';
import s from './App.module.css';
import { selectContacts, selectLoading, selectError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2 className={s.titleContacts}>Contacts</h2>
      <div className={s.allContacts}>All contacts: {contacts.length}</div>

      {loading ? (
         <Notification message="Loading contacts..." />
      ) : error ? (
        <Notification message="Error loading contacts. Please try again." />
      ) : contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="Contact list is empty" />
      )}
    </div>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import RegisterForm from './RegisterForm';
// import LoginForm from './LoginForm';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/register">
//             <RegisterForm />
//           </Route>
//           <Route path="/login">
//             <LoginForm />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
