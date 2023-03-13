import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AuthLayout from 'modules/AuthLayout/AuthLayout';

const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
const ContactBooks = lazy(() => import('./Pages/ContactBooks/ContactBooks'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <AuthLayout>
      <BrowserRouter>
        <Suspense>
          <Navbar />
          <Routes>
            <Route path="/contacts" element={<ContactBooks />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthLayout>
  );
};
