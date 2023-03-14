import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AuthLayout from 'modules/AuthLayout/AuthLayout';

import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
const ContactBooks = lazy(() => import('./Pages/ContactBooks/ContactBooks'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <AuthLayout>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <Suspense>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactBooks />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route path="*" element={<LoginPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthLayout>
  );
};
