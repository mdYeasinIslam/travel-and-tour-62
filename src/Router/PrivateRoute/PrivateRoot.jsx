import React, { useContext } from 'react';
import { AuthProvider } from '../../context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoot = ({children}) => {
    const {user,loader} =useContext(AuthProvider)
    const location = useLocation()
    if(loader){
        return <div>loading</div>
    }
    if(user?.uid){
        return children
    } 
    return <Navigate to='/login' state={{from:location}} replace />
};

export default PrivateRoot;