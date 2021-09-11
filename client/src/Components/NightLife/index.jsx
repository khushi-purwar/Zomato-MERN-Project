import React from 'react'

// components
import NightlifeCarousel from './NightlifeCarousel';

const NightLife = () => {
    return (
        <div>
            <h1 className="text-xl my-4 md:my-8 md:text-4xl md:font-semibold">Collections</h1>
            <NightlifeCarousel />
            <h1 className="text-xl my-4 md:my-8 md:text-4xl md:font-semibold">Nightlife Restaurants</h1>
        </div>
    )
}

export default NightLife;
