import React from 'react'

// components
import DiningCarousel from './DiningCarousel';

const Dining = () => {
    return (
        <div>
            <h1 className="text-xl my-4 md:my-8 md:text-4xl md:font-semibold">Collections</h1>
            <DiningCarousel />
            <h1 className="text-xl my-4 md:my-8 md:text-4xl md:font-semibold">Dine-Out Restaurants</h1>
        </div>
    )
}

export default Dining;
