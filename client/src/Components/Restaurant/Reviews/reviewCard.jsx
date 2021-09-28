import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

const reviewCard = () => {
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                {/* header */}
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                        <img 
                           src="https://b.zmtcdn.com/data/user_profile_pictures/2ed/ba9b5388ae0a5104cd95580608e142ed.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                           alt="avatar" 
                           className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">Khushi Purwar</h3>
                        <small className="text-gray-500">5 Reviews &bull; 3 Followers</small>
                    </div>
                   </div>
                    <button className="text-zomato-300 border border-zomato-200 py-2 px-4 rounded-lg">Follow</button>
                </div>
           
           {/* card body */}
           <div className="flex flex-col gap-3">
               <div className="flex items-center gap-3">
                   <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center">
                       3 <TiStarFullOutline/> 
                    </span>
                    <h5 className="text-xs uppercase">Delivery</h5>
                    <small className="text-gray-500">3 days ago</small>
               </div>

               <div className="w-full">
                   <p className="w-full text-gray-600 font-light text-base">I ordered masala vadapav and kitkat shake and honestly masala vadapav was soo good very yummy and shake was perfect..great

</p>
               </div>
           </div>
            </div>
        </>
    )
}

export default reviewCard;
