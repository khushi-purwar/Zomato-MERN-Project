import React from 'react'
import {useParams} from 'react-router-dom';

import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';

const Home = () => {
    const {type} = useParams();
    return (
      <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "diningout" && <Dining />}
      {type === "nightlife" && <NightLife />}
      {type === "nutrition" && <Nutrition />}
    </div>
    )
}

export default Home;