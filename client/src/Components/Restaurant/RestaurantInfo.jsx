import React from 'react'
import {TiStarFullOutline} from 'react-icons/ti'

const RestaurantInfo = (props) => {
    return (
        <>
              <div className="my-4">
                <div className="flex flex-col flex-col-reverse md:flex-row  md:items-center justify-between gap-3 ">
                    <h1 className="text-xl md:text-3xl font-semibold md:font-semibold">{props.name}</h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">{props.diningRating} <TiStarFullOutline/> </span>
                            <span>
                                <strong>200</strong>
                                <p className="border-b border-dashed text-xs">Dining Review</p>
                            </span>
                            
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">{props.deliveryRating} <TiStarFullOutline/> </span>
                            <span>
                                <strong>49K</strong>
                                <p className="border-b border-dashed text-xs">Delivery Review</p>
                            </span>
                            
                        </div>
                    </div>
                </div>
            
            <div className="text-base text-gray-600 md:text-lg md:text-gray-500 ">
                <h3>{props.cuisine}</h3>
                <h3 className="text-gray-400">{props.address}</h3>
                <h3><span className="text-yellow-500">Open Now</span> - 8:30am to 10:30pm 
</h3>
            </div>
            </div>
         
        </>
    )
}

export default RestaurantInfo
