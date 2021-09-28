import React, { useState } from "react";

//
import ReviewCard from "../../Components/Restaurant/Reviews/reviewCard";
import AddReviewCard from "../../Components/Restaurant/Reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", "", ""]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative gap-5">
        <div className="w-full md:6/12 flex flex-col gap-3">
            <div className="md:hidden">
                <AddReviewCard />
            </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          className="hidden md:flex items-start md:w-6/12 sticky rounded-xl top-2 bg-white p-4 shadow-md flex-col gap-2"
          style={{ height: "fit-content" }}
        >
          
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
};

export default Reviews;
