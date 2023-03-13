import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { isUserLogin } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <RegisterForm />;
};
export default RegisterPage;
