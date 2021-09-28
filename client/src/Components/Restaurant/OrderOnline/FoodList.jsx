import React from 'react'

//components
import FoodItem from './FoodItem';

const FoodList = (props) => {
    return (
        <>
              <div>
                        <h2 className="sticky top-0 bg-white px-2 py-1 z-10 text-2xl font-regular pb-3">{props.title}</h2>

                      <div className="flex flex-col gap-5">
                      {
                          props.items.map (( item)=> (
                            <FoodItem {...item}    />
                          ))
                      }
                      </div>
                                        

                        </div>

        </>
    )
}

export default FoodList;
