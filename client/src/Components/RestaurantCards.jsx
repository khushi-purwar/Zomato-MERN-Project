import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCards = (props) => {
  return (
    <>
      <div className=" bg-white p-4 w-full rounded-2xl mb-4 hover:shadow-lg md:w-1/2 lg:w-1/3 ">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute bottom-4 w-full flex items-end justify-between">
            <div className="flex flex-col gap-2 items-start">
              {props.isPro && (
                <span className="bg-pink-600 text-white px-2 rounded-r text-sm ">
                  Pro extra 10% off
                </span>
              )}

              {props.isOff && (
                <span className="bg-blue-600 text-white px-2 rounded-r text-sm">
                  ₹{`${props.isOff}`} Off
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 px-1 rounded mr-3">
              
                  {props.durationOfDelivery} min
              
            </span>
          </div>
          <img
            src={props.photos.length && props.photos[0]}
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="bg-green-500 text-white text-sm p-1 rounded flex items-center">
             {props.restaurantreviewValue} <AiTwotoneStar />{" "}
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-600 text-sm">
            <p>{props.cuisine.join(", ")}</p>
            <p>₹ {props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCards;
