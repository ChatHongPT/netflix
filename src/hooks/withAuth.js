// hooks/withAuth.js (HOC)
import { Navigate } from 'react-router-dom';

export const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
      return <Navigate to="/signin" />;
    }
    
    return <WrappedComponent {...props} />;
  };
};