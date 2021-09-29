import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButtons from "../Components/Restaurant/InfoButtons";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import TabContainer from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

const RestaurantLayout = (props) => {
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/9/3400299/97e848fe0a0aac908a0fc9f9a549df34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/9/3400299/97e848fe0a0aac908a0fc9f9a549df34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/9/3400299/97e848fe0a0aac908a0fc9f9a549df34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/9/3400299/97e848fe0a0aac908a0fc9f9a549df34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/9/3400299/97e848fe0a0aac908a0fc9f9a549df34.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          ]}
        />

        <RestaurantInfo
          name="Bikanervala"
          diningRating="3.5"
          deliveryRating="3.9"
          cuisine="North Indian, South Indian, Mithai, Street Food, Desserts, Chinese, Bakery, Pizza"
          address="Khandari, Agra"
        />

        <div className="my-4 flex flex-wrap gap-3">
        <InfoButtons isActive>
            <TiStarOutline className="text-xl" /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine className="text-zomato-300 text-xl" /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus className="text-zomato-300 text-xl" /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine className="text-zomato-300 text-xl" /> Share
          </InfoButtons>
        </div>

        <div className="my-10">
        <TabContainer>
          
          </TabContainer>
        </div>
        {props.children}

   
      </div>

      <CartContainer />

    </>
  );
};

export default RestaurantLayout;
