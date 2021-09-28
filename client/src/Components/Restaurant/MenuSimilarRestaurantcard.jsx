import React from "react";
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantcard = (props) => {
  return (
    <>
     <div className="mx-2">
     <div className=" bg-white shadow rounded-md ">
        <div className="w-full h-56 ">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover rounded-t-md "
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="font-semibold text-lg">{props.title}</h3>
          <div className="flex items-center justify-between text-sm"> 
              <span  className="flex gap-1 items-center " >
                  <span className="flex gap-1 items-center bg-green-700 text-white px-2 py-1 rounded">30<TiStar /></span>
                  Dining
              </span>
              <span className="w-2 h-4 border-r border-gray-300" />
              <span  className="flex gap-1 items-center" >
                  <span className="flex gap-1 items-center bg-green-700 text-white px-2 py-1  rounded">30<TiStar /></span>
                  Delivery
              </span>
            
          </div>

          <h4>Street Food, Beverages, Tea</h4>
          <small>Civil Lines, Agra</small>
        </div>
      </div>
     </div>
    </>
  );
};

export default MenuSimilarRestaurantcard;
