import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginForm from 'modules/LoginForm/LoginForm';
import { isUserLogin } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <LoginForm />;
};
export default LoginPage;
