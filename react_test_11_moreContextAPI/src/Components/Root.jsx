import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' max-w-[1280px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;