import React from 'react'


const FoodItem = (props) => {

    return (
        <>
            <div className="flex items-center  justify-between">
                   <h5>{props.name}</h5>
                   <div className="flex flex-col items-end">
                       <small className="text-sm">
                       ₹{parseInt(props.price) * parseInt(props.qty) }
                       </small>
                       <div className="px-2 text-base bg-zomato-400 text-white rounded flex items-center gap-1 ">
                       <button className="p-1 bg-zomato-400 text-white rounded" >-</button>
                       <small className="bg-zomato-400">7</small>
                       <button className="p-1 bg-zomato-400 text-white rounded" >+</button>
                       </div>

                   </div>
               </div>
               <hr  />
        </>
    )
}

export default FoodItem;
