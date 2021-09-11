import React from 'react'
import {useParams} from 'react-router-dom';

import Delivery from './Delivery';
import Dining from './Dining';
import NightLife from './NightLife';

const Master = () => {
    const {type} = useParams();
    return (
      <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "diningout" && <Dining />}
      {type === "nightlife" && <NightLife />}
      {/* {type === "nutri" && <Nutrition />} */}
    </div>
    )
}

export default Master
