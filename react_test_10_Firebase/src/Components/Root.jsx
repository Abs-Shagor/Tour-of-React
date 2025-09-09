import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex justify-between items-center '>
                <h1 className='text-center text-[40px] font-semibold '>Welcome</h1>
                <div className=' flex gap-5 items-center '>
                    <Link to={'/login'} className='btn '>Login</Link>
                    <Link to={'/signup'} className='btn btn-primary'>Signup</Link>
                </div>
            </div>
            <hr className=' mb-10 ' />

            <Outlet></Outlet>
        </div>
    );
};

export default Root;