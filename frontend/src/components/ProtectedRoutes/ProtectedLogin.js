import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const ProtectedLogin= ({ children }) => {
    const { store } = useContext(AuthContext);
    let location = useLocation()
    if (store.authentication.isAuthorized) return <Navigate to="/" state={{ from: location }} replace />;
  
    return children;
  }
  export default ProtectedLogin;