import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';
import AllHotels from '../pages/AllHotels/AllHotels';
import PrivateRoot from './PrivateRoute/PrivateRoot';
import Secondary from '../Layout/Secondary';

const Root = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
            ]
        },
        {
            path: '/',
            element: <Secondary />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <LogIn />
                },
                {
                    path: '/registe',
                    element: <Register />
                },
                {
                    path: '/tourist-place/:id',
                    loader: ({ params }) => {
                        return fetch(`http://localhost:5000/tourist-place/${params.id}`)
                    },
                    element: <PrivateRoot><AllHotels /></PrivateRoot>
                },
                {
                    path: '/about',
                    element: <About />
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Root;