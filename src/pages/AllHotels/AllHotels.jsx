import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hotel from './Hotel/Hotel';
import GoogleMap from './GoogleMap/GoogleMap';

const AllHotels = () => {
    const [placeName, setPlaceName] = useState('')
    const hotels = useLoaderData()

    return (
        <div className='md:grid grid-cols-2 my-5'>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-xl font-semibold font-[cursive]'>WelCome to <Link to='/' className='text-lime-600'>{placeName}</Link>  </h1>
                <div className=''>
                    {
                        hotels.map(hotel => <Hotel key={hotel._id} hotel={hotel} setPlaceName={setPlaceName} />)
                    }
                </div>
            </div>
            <div className='mx-auto'>
                    <GoogleMap/>
            </div>
        </div>

    );
};

export default AllHotels;