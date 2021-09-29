import React , {useState} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright  } from "react-icons/io";
import {IoCloseSharp} from 'react-icons/io5'

// components
import FoodItem from './FoodItem';

const CartSm = ({toggle}) => {
    return (
         <>
         <div className="md:hidden flex items-center justify-between">
         <div className=" flex flex-col  items-start">
            <small 
              className="flex items-center gap-1"
              onClick={toggle}
            >
                1 Item <IoMdArrowDropdown /> 
            </small>
            <h4> ₹300 <sub>(plus tax)</sub> </h4>
        </div>

        <button className="flex items-center gap-1 bg-zomato-300 px-3 py-1 text-white rounded-lg">
            Continue <IoMdArrowDropright />
        </button>
         </div>
         </>

    )
}

const CartLg = ({toggle}) => {
    return (
         <>
         <div className=" hidden md:flex items-center justify-between container px-20 mx-auto">
         <div className=" flex gap-2 items-start">
            <span className="border border-gray-300 text-xl p-1 rounded bg-white " onClick={toggle}>
               <IoMdArrowDropup />
            </span>
            <h4 className="font-medium"> Your Orders(1) </h4>
        </div>

        <div className="flex items-center gap-4">
        <h4 className="text-xl font-medium "> Subtotal: ₹300 </h4>
        <button className="flex items-center gap-1 bg-zomato-400 px-12 py-1 text-white text-lg font-light h-10 rounded-lg">
            Continue 
        </button>
        </div>
         </div>
         </>

    )
}

const CartContainer = () => {

    const [isOpen , setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen( (prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
      {
          isOpen && (
            <div className="fixed w-full h-56 overflow-y-scroll bottom-14 bg-white z-10 p-2 px-3 ">
            <div className="flex items-center justify-between text-xl">
            <h3 className="font-semibold ">Your Orders</h3>
            <IoCloseSharp onClick={closeCart} />
            </div>
            <hr  className="my-2" />
            <div className="flex flex-col gap-3 ">
                <FoodItem name="Cheese n Tomato" price="99" qty="5" />
                <FoodItem name="Cheese n Tomato" price="99" qty="5" />
                <FoodItem name="Cheese n Tomato" price="99" qty="5" />
                <FoodItem name="Cheese n Tomato" price="99" qty="5" />
                <FoodItem name="Cheese n Tomato" price="99" qty="5" />
            </div>
         </div>
          )
      }
            <div className="fixed w-full bottom-0 bg-white z-10 p-2 px-3 ">
                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>
        </>
    )
}

export default CartContainer;
