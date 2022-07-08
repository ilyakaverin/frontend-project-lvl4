import { useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const RequireAuth = ({ children }) => {
    const { store } = useContext(AuthContext);
    let location = useLocation()
    if (!store.authentication.isAuthorized) return <Navigate to="/login" state={{ from: location }} replace />; 
  
    return children;
  }
  export default RequireAuth;