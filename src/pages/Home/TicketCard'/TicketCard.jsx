import './TicketCard.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const TicketCard = ({ setShowBookingCard, category, categories }) => {
    const [showCalender, setShowCalender] = useState(false)
    const [touristSpot, setTouristSpot] = useState([])
    const [placeName, setPlaceName] = useState('')
    //date manager
    const [date, setDate] = useState(new Date());
    const getdate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    const onChange = date => {
        setDate(date)
        setShowCalender(false)
    }
    const destinationHandler = (e) => {
        const destination = e.target.value
        const filterPlaces = categories.filter(places => places.name == destination)
        setTouristSpot(filterPlaces)
    }
    const placeNameHandler = (name) => {
        console.log(name)
    }
    // console.log(touristSpot[0]?.name)

    return (

        <div className="card w-[60%] lg:w-[70%] mt-5 lg:mt-0  mx-auto  bg-white text-primary-content">
            <div className="card-body">
                <div className="card-actions justify-end">
                    <button onClick={() => setShowBookingCard(false)} className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <form>

                    <div>
                        {
                            showCalender &&
                            <div className='react-calendar'>
                                <Calendar onChange={onChange} value={date} />
                            </div>
                        }
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Origin</span>
                            </label>
                            <div>
                                <input name='origin' type="text"
                                    placeholder='Origin Name' className="input input-bordered w-[100%] bg-[#d6d2d2] text-black font-bold"
                                    required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Destination</span>
                            </label>
                            <div className='dropdown'>
                                <input tabIndex={0} name='destination' type="text"
                                    onChange={destinationHandler}
                                    defaultValue={category.name}
                                    placeholder='Tourist Spot' className="input input-bordered w-[100%] bg-[#d6d2d2] text-black font-bold" required />
                                <ul tabIndex={0} className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        categories.map(categoryName => {
                                            return (
                                                <li onClick={placeNameHandler(categoryName.name)} key={categoryName.id}>{categoryName.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex gap-2'>

                        <div className="form-control">
                            {!showCalender && <>
                                <label className="label">
                                    <span className="label-text">From</span>
                                </label>
                                <div>
                                    <input name='date1' type="text"
                                        // defaultValue="00/00/00"
                                        defaultValue={getdate}
                                        placeholder='00/00/00' className="input input-bordered w-[100%] bg-[#d6d2d2] text-black font-semibold" required />

                                    <div onClick={() => setShowCalender(!showCalender)} className='first-input relative right-[-80%] bottom-8     md:left-66 md:bottom-[50%] text-black'>
                                        <AiOutlineCalendar className='w-5 h-5' />
                                    </div>
                                </div>
                            </>}
                        </div>
                        <div className="form-control">
                            {!showCalender && <>
                                <label className="label">
                                    <span className="label-text">To</span>
                                </label>
                                <div>
                                    <input name='email' defaultValue={getdate} type="text" placeholder="" className="input input-bordered w-[100%] bg-[#d6d2d2] text-black font-semibold" required />

                                    <div onClick={() => setShowCalender(!showCalender)} className=' relative  right-[-80%] bottom-8  md:right-30 md:bottom-[50%] text-black  '>
                                        <AiOutlineCalendar className='h-5 w-5' />
                                    </div>
                                </div>
                            </>}
                        </div>
                    </div>

                </form>
                <Link to={`${touristSpot[0]?.name ? `/tourist-place/${touristSpot[0].id}` : `/tourist-place/${category.id}`} `} className="card-actions">
                    <button className="btn w-full btn-warning">Start Booking</button>
                </Link>
            </div>
        </div>

    );
};

export default TicketCard;