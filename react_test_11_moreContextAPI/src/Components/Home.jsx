import React from 'react';

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext);
    authInfo.Name = 'ABs';

    return (
        <div className='max-w-[500px] min-h-screen mx-auto bg-gray-300 p-5 '>
            <h1 className='text-center font-bold mb-10'>Home section </h1>
            <div>
                {authInfo.Name}
            </div>
        </div>
    );
};

export default Home;