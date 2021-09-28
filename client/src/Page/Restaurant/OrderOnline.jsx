import React ,{useState} from 'react'
import {AiOutlineCompass} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'

// components
import FloatMenuButton from '../../Components/Restaurant/OrderOnline/FloatMenuButton';
import FoodItem from '../../Components/Restaurant/OrderOnline/FoodItem';
import FoodList from '../../Components/Restaurant/OrderOnline/FoodList';
import MenuListContainer from '../../Components/Restaurant/OrderOnline/MenuListContainer';


const OrderOnline = () => {

    return (
        <>
            <div className="w-full flex">
                <aside className="hidden md:flex flex-col gap-3 border-r-1 border-grey-200 h-96 overflow-y-scroll w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    
                </aside>
                <div className="w-full md:w-3/4 md:pl-5 h-96 overflow-y-scroll">
                    <h2 className="text-2xl font-regular pb-3">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500"><AiOutlineCompass /> Live Track Your Order | <BiTimeFive />45 min </h4>
                   
                    <section className="flex flex-col gap-3 md:gap-5">
                        <FoodList 
                        title="Recommended"
                        items={ [
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            },
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            },
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            }
                        ] }
                        />         

                         <FoodList 
                        title="Pizza"
                        items={ [
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            },
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            },
                            {
                                image: "https://b.zmtcdn.com/data/dish_photos/f13/f4e2d2f6f28ff03e3268111f4a145f13.jpg?output-format=webpfit=around|130:130crop=130:130;*,*",
                                title:"Dal Makhni + Butter Chicken +2 Parantha+Salad+Chutney",
                           price:"1999",
                           rating:3,
                           description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, tempora dolorum? Repudiandae illum doloribus facere, fuga at velit necessitatibus distinctio ducimus magnam. Quaerat perspiciatis animi temporibus odit unde. Facilis, quasi."

                            }
                        ] }
                        />             

                    </section>
                </div>
            </div>
            <FloatMenuButton />
        </>
    )
}

export default OrderOnline;                    
