import React from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

import ReactStars from "react-rating-stars-component";


// components
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/Restaurant/MenuSimilarRestaurantcard";
import { PrevArrow, NextArrow } from "../../Components/CarouselArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import Mapview from "../../Components/Restaurant/Mapview";

const Overview = () => {
  const { id } = useParams();

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative gap-10">
        <div className="w-full md:w-8/12 ">
          <h2 className="font-medium text-lg md:text-2xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-xl mb-3 font-regular">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-300">
                See all menus <IoMdArrowDropright />{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={[
                "https://b.zmtcdn.com/data/menus/390/19640390/380f7fc70190bf3a1e6c43343ef08687.jpg",
               "https://b.zmtcdn.com/data/menus/141/19667141/4306ddd35de006f06e3b49c88ec3b6da.jpg",
               "https://b.zmtcdn.com/data/menus/275/19136275/b766bfed01e701505d57f4d38772c6ea.jpg"
              ]}
            />
          </div>
          <h4 className="text-xl font-regular my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-green-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-green-600 px-2 py-1 rounded-full">
              Beverages
            </span>
            <span className="border border-gray-600 text-green-600 px-2 py-1 rounded-full">
              Tea
            </span>
          </div>

                {/* for mobile device */}
          <div className="my-4  w-full md:hidden flex flex-col gap-4">
          <Mapview 
            title="Agra Express" 
            address="D-501, Kamla Nagar, Agra" 
            mapLocation = { [27.25671102799571, 78.01930774221412] }
            phno="+91 7872187178"
          />
         
          </div>

          <div className="my-4">
            <h4 className="text-xl font-regular">Average Cost</h4>
            <h6>Rs 100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>

          <div className="my-4">
            <h4 className="text-xl mb-3 font-regular">Similar Restaurants</h4>
            <Slider {...settings}>
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/2/19693992/050a578061cd1b38ad3530b559a8495a_featured_v2.jpg"
                title=" Ram Rasoi Yadav Dhaba"
              />
            </Slider>
          </div>

          <div className="my-4">
            <h4 className="text-xl font-regular">
              Rating your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>

    

          <h4 className="text-xl font-regular">Review Highlights</h4>
          <div className="my-4 flex flex-col gap-2">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-4 shadow-md flex-col gap-4"
          style={{ height: "fit-content" }}
        >

          <Mapview 
            title="Agra Express" 
            address="D-501, Kamla Nagar, Agra" 
            mapLocation = { [27.25671102799571, 78.01930774221412] }
            phno="+91 7872187178"
          />
         
        </aside>
      </div>
    </>
  );
};

export default Overview;
