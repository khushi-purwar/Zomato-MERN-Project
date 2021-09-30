import React from "react";
import {BsShieldLockFill} from 'react-icons/bs'

// components
import FoodItem from '../Components/Cart/FoodItem'
import AddressList from "../Components/Checkout/AddressList";

const Checkout = () => {

  const address = [
    {
      name : "Home",
      address : "India",
    },
    {
      name : "Gym",
      address : "India",
    },
    {
      name : "Office",
      address : "India",
    }

  ];

  return (
    <>
      <div className="flex flex-col gap-3 my-6 items-center">
        <h1 className="text-xl md:text-4xl text-center font-bold">Checkout</h1>

        <div className="w-full md:w-3/5 bg-white py-3 w-full  flex flex-col items-center rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium">Summary</h3>
          <div className="w-full flex flex-col items-center gap-2">
            <h5 className="text-lg  tracking-wider">Order From</h5>
            <div className="w-full flex flex-col items-center text-gray-400">
              <h4>Dominos Pizza</h4>
              <small >GT World Mall, Magadi Road, Banglore</small>
            </div>

            <div className="my-4 px-4 md:w-3/5 w-full flex flex-col gap-2">
                <FoodItem name="Pizza" qty={3} price={300} />
                <FoodItem name="Pizza" qty={3} price={300} />
                <FoodItem name="Pizza" qty={3} price={300} />
            </div>

            <div className="my-4  md:w-3/5 w-full flex flex-col gap-3">
              <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList  address={address} />
             
            </div>
            
          </div>
          <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 md:px-0  h-12 text-white font-medium text-lg bg-zomato-400 rounded-lg">
            Pay Securely <BsShieldLockFill/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
