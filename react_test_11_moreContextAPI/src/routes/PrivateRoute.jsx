import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return (
            <div className='flex justify-center mt-50'>
                <p className='text-[24px] font-semibold'> 
                    Loading <span className="loading loading-spinner loading-sm"></span> 
                </p>
            </div>
        )
    }
    else if(user) {
        return children;
    }
    else {
        return (
            <Navigate to={'/login'} ></Navigate>
        )
    }
};

export default PrivateRoute;