import React , {useState} from 'react'

// components
import DeliveryCarousel from './DeliveryCarousel'
// import Brand from './Brand'
import RestaurantCards from '../RestaurantCards'


const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id : 101,
            photos : ["https://b.zmtcdn.com/data/pictures/7/19705917/62bff5dc23999bc8a17165d8e583569e_o2_featured_v2.jpg?output-format=webp"],
            name :"Kerala Coast Thattukada",
            cuisine : ["Kerala" ,"South Indian", "Chinese", "Beverages"],
            averageCost : 100,
            isPro : true,
            isOff : 80,
            durationOfDelivery: 47,
            restaurantreviewValue :4.1
        },
        {
            _id : 102,
            photos : ["https://b.zmtcdn.com/data/pictures/5/3400005/73a81055bb47b7345786737f5c77fec4_o2_featured_v2.jpg?output-format=webp"],
            name :"Kerala Coast Thattukada",
            cuisine : ["Kerala" ,"South Indian", "Chinese", "Beverages"],
            averageCost : 100,
            isPro : false,
            isOff : 20,
            durationOfDelivery: 27,
            restaurantreviewValue :3.1
        },
        {
            _id : 103,
            photos : ["https://b.zmtcdn.com/data/pictures/6/3400696/5fe71be0619af186c3fba4b48bd1e9f6_o2_featured_v2.jpg?output-format=webp"],
            name :"Kerala Coast Thattukada",
            cuisine : ["Kerala" ,"South Indian", "Chinese", "Beverages"],
            averageCost : 100,
            isPro : true,
            isOff : 55,
            durationOfDelivery: 147,
            restaurantreviewValue :4.3
        },
        {
            _id : 104,
            photos : ["https://b.zmtcdn.com/data/pictures/4/19667144/bf55ea60442992848cc4a477c8f7b3e5_o2_featured_v2.jpg?output-format=webp"],
            name :"Kerala Coast Thattukada",
            cuisine : ["Kerala" ,"South Indian", "Chinese", "Beverages"],
            averageCost : 400,
            isPro : false,
            isOff : 50,
            durationOfDelivery: 47,
            restaurantreviewValue :4.1
        }
    ]);

    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
           <div className="flex flex-wrap justify-content">
           {
               restaurantList.map(( restaurant )=> (
                <RestaurantCards {...restaurant} key={restaurant._id} />
               ))
           }
           
           </div>
   
        </>
    )
}

export default Delivery
