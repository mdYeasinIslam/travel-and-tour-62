import React, { useEffect } from 'react';
import './Hotel.css'
const Hotel = ({ hotel, setPlaceName }) => {

    const { name, img, details, title, place } = hotel
    useEffect(() => {

        setPlaceName(place)
    }, [hotel.place])
    return (

        <div className="md:card md:card-side bg-base-100 shadow-xl my-5 border rounded-xl">
            <figure className='w-[100%]'><img className='rounded-xl md:h-[9rem]' src={img} alt="Movie" /></figure>
            <div className="card-text md:card-body ">
                <h2 className="">New movie is released!</h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aspernatur. dolor sit amet consectetur adipisicing elit. Velit, vel.</p>

            </div>
        </div>

    );
};

export default Hotel;