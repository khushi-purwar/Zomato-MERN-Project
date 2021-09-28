import React from 'react'
import ReactStars from 'react-rating-stars-component';
import {AiOutlinePlus} from 'react-icons/ai';

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-start md:gap-4  ">
                <div classname="w-3/12  h-24 md:h-36 rounded-lg" >
                    <img src={props.image} alt="Food"  classname="w-full h-full rounded-lg" />
                </div>
                <div className="w-7/12 flex gap-1 flex-col">
                    <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-base">{props.title}</h3>
                    {/* <button className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 rounded-lg">
                      <AiOutlinePlus/>   Add
                    </button> */}
                    </div>
                    <ReactStars count={5} value={props.rating} />
                    <h5>₹{props.price}</h5>
                    <p className="truncate">{props.description}</p>
                </div>
                <div className='hidden md:block w-2/12 flex justify-end'>
                    <button className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 rounded-lg">
                      <AiOutlinePlus/>   Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default FoodItem;
