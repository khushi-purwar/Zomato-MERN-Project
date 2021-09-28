import React ,{useState} from 'react'

// components
import FloatMenuButton from '../../Components/Restaurant/OrderOnline/FloatMenuButton';
import MenuListContainer from '../../Components/Restaurant/OrderOnline/MenuListContainer';



const OrderOnline = () => {

    

    return (
        <>
            <div className="w-full">
                <aside className="hidden md:flex flex-col gap-3 border-r-1 border-grey-200 h-96 overflow-y-scroll w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    
                </aside>
                <div className="w-full md:w-3/4"></div>
            </div>
            <FloatMenuButton />
        </>
    )
}

export default OrderOnline;
