import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const UserProfile = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className='max-w-[500px] mx-auto mt-10 border border-gray-500 p-5 rounded-xl '>
            <p className='text-[24px] font-semibold'>Profile</p>
            <hr className='mb-5' />

            <img src={user.photoURL} className='h-35 w-35 mx-auto rounded-xl' alt="profile Pic" />
            <p>Name: {user.displayName} </p>
            <p>Email: {user.email} </p>
            <p>Verified: {user.emailVerified ? 'Yes' : 'No'} </p>
            <p>settings</p>
        </div>
    );
};

export default UserProfile;