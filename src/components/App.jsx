import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import useAuth from './hooks/UseAuth';
import { Container } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Registration = lazy(() => import('pages/Registration'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <Container maxW="2lg" centerContent>
        
          <Routes>
           
              <Route index element={<Home />} />

              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<Registration />}
                    redirectTo="/contacts"
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<Login />}
                    redirectTo="/contacts"
                  />
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />

              <Route path="*" element={<Home />} />
           
          </Routes>
        
      </Container>
    )
  );
}

export default App;