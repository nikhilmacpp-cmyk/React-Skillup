import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = (props) =>{
    const {children}=props;
    const {
        isAuthenticated
    } = useSelector((state)=> state.auth)
    console.log('isAuthenticated',isAuthenticated)
    if (!isAuthenticated) {

    return <Navigate to="/" />

  }
  return children
}
export default ProtectedRoute