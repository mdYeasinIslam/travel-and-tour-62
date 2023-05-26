import React from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Secondary = () => {
    return (
        <div>
            <div className='text-black '>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Secondary;