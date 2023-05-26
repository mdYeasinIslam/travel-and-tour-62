import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link, useLoaderData } from 'react-router-dom';
import PlaceCard from './PlaceCard/PlaceCard';
import Navbar from '../Navbar/Navbar';
import TicketCard from './TicketCard\'/TicketCard';
const Home = () => {
    const [categories, setCategories] = useState([])
    const [showBookingCard, setShowBookingCard] = useState(false)
    const [category, setCategory] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/tourist-place')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    const DataFromPlaceCard = (placeId) => {
        setShowBookingCard(true)
        setCategory(placeId)
    }

    return (
        <div className='home-page '>
            <Navbar />
            <div className='lg:grid grid-cols-2 items-center h-[100%] lg:h-[40rem]  w-full ' >
                <div className='font-[cursive] text-center'>
                    <h5 className='text-xl '>Welcome To Turio</h5>
                    <h1 className='text-5xl lg:text-6xl font-semibold '>Enjoy Your New <br /> Adventure</h1>
                    <p className='w-[60%] mx-[20%] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reprehenderit minus consequuntur? Molestiae libero, quos temporibus itaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, incidunt!</p>
                    <button onClick={() => setShowBookingCard(true)} className={`btn btn-warning ${showBookingCard ? ' hidden' : undefined}`}>Booking...</button>
                </div>
                {
                    showBookingCard ?
                        <div>
                            <TicketCard 
                            category={category}
                            categories={categories}
                            setCategory={setCategory}
                             setShowBookingCard={setShowBookingCard} />
                        </div>
                        :
                        <div className=" md:grid grid-cols-3 gap-4   md:space-y-0 w-[99%] mt-6 lg:w-[90%] mx-auto rounded-full">
                            {
                                categories.map(category => {
                                    return <PlaceCard
                                        key={category.id}
                                        category={category}
                                        DataFromPlaceCard={DataFromPlaceCard}
                                    />
                                })
                            }
                        </div>
                }
            </div>
        </div>

    );
};

export default Home;