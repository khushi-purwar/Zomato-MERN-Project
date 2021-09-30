import React from "react";
import { Route } from 'react-router-dom';


// layouts
import CheckoutLayout from "../Layout/Checkout.Layout";

const CheckoutLayoutHOC = ({component : Component , ...rest}) =>{
    return (
     <>
    <Route {...rest}  
           component={(props) =>(
               <CheckoutLayout>
                   <Component {...props} />
               </CheckoutLayout>
           )} 
    />
    </>
    );
};

export default CheckoutLayoutHOC;