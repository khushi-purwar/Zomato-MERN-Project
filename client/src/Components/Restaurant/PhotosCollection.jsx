import React from 'react';


const MenuCollection = (props) => {


    return (
        <>
    

            <div className="w-32 h-48 md:w-48 md-h-48 flex flex-col" onClick={props.openViewer}>
        <div className="w-full h-full overflow-hidden rounded">
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
        {/* <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div> */}
      </div>
        </>
    )
}

export default MenuCollection
