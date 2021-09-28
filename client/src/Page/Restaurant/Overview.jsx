import React from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// components
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/Restaurant/MenuSimilarRestaurantcard";
import { PrevArrow, NextArrow } from "../../Components/CarouselArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";

const Overview = () => {
  const { id } = useParams();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
              image="https://b.zmtcdn.com/data/menus/390/19640390/380f7fc70190bf3a1e6c43343ef08687.jpg"
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
          className="hidden md:block md:w-4/12 sticky rounded-xl top-2 bg-white p-4 shadow-md"
          style={{ height: "fit-content" }}
        >
          <div>
            <h4 className="text-xl font-regular">Call</h4>
            <h5 className="text-zomato-200 font-medium">+91 8793872213</h5>
          </div>

          <div>
            <h4 className="text-xl font-regular">Direction</h4>
            <div className="w-full h-48">
            <MapContainer
              center={[27.25671102799571, 78.01930774221412]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[27.25671102799571, 78.01930774221412]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Overview;
