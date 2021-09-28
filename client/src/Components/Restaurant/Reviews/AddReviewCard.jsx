import React, {useState} from "react";
import Rating from "react-rating-stars-component";

// components
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {

    const [isOpen, setIsOpen] = useState(false)
  const handleRating = (value) => console.log(value);

  const openModal = () => setIsOpen( true );

  return (
    <>
    < ReviewModal  isOpen={isOpen} setIsOpen={setIsOpen} />
      <h3 className="text-2xl font-regular">Rate your experience</h3>

      <div className="flex items-center gap-5">
        <div className="flex gap-1 items-center">
          <input type="radio" name="review" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>

        <div className="flex gap-1 items-center">
          <input type="radio" name="review" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>

      <div>
        <Rating count={5} size={28} onChange={handleRating} />
      </div>

      <button 
        className="text-zomato-300 text-lg"
        onClick={openModal}
    >Write a Review
    </button>
    </>
  );
};

export default AddReviewCard;
