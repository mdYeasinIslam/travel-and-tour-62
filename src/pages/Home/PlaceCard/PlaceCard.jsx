import React from 'react';
import './PlaceCard.css'
import { Link } from 'react-router-dom';
const PlaceCard = ({ category, DataFromPlaceCard }) => {
    const { id, img, name } = category
    const dataTransfer =() =>{
        DataFromPlaceCard(category)
    }
    return (
        // <Link to={`/tourist-place/${id}`}>
        <div onClick={dataTransfer}>
            <div className="card  card2 w-[80%] mx-auto  lg:w-[10rem] h-[15rem] md:h-[16rem] border-2 brightness-200 shadow-xl image-full">
                <figure><img className='w-[100%]' src={img} alt="places" /></figure>
                <div className=" card-titl ">
                    <h2 className="card-name">{name}</h2>
                </div>
            </div>
        </div>


        // {/* </Link> */}
    );
};

export default PlaceCard;