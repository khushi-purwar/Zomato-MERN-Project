import React ,{ useState} from 'react'
import {HiMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

// components
import MenuListContainer from './MenuListContainer';


const FloatMenuButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu =( )=>{
        setIsClicked( (prev) => !prev)
    }
    return (
        <>
        <div className='fixed z-30 bottom-2 right-2  flex flex-col items-center gap-3 md:hidden'>
            {isClicked &&
            <div className=" p-3  h-80 overflow-y-scroll bg-white">
            <MenuListContainer />
        </div>
            
            }
        <button 
               className=" text-white flex gap-3 items-center bg-gray-800 px-3 py-2 rounded-full md:hidden"
               onClick={toggleMenu}
            >
              { isClicked? <MdClose /> : <HiMenu /> }Menu
            </button> 
        </div>
           
        </>
    )
}

export default FloatMenuButton
