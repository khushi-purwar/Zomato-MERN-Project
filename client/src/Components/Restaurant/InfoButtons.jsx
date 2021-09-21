import React from 'react'

import classname from 'classnames';


const InfoButtons = (props) => {
    return (
        <>
           <button
        className={classname(
          "flex items-center gap-3 border  border-gray-400 px-3 py-2 rounded-lg",
          {
            " bg-zomato-300 text-white border-none": props.isActive,
          }
        )}
      >
            
         {props.children}
          </button>
        </>
    )
}

export default InfoButtons
