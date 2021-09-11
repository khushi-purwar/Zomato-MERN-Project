import React from 'react'
import {useParams} from 'react-router-dom';

import Delivery from './Delivery';
import Dining from './Dining';

const Master = () => {
    const {type} = useParams();
    return (
      <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "diningout" && <Dining />}
      {/* {type === "night" && <NightLife />}
      {type === "nutri" && <Nutrition />} */}
    </div>
    )
}

export default Master
