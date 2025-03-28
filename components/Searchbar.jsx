import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets';

const Searchbar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() =>{
      setVisible(location.pathname.includes("/collection") && showSearch);
    }, [location, showSearch]);

    if (!visible) return null;
  return (
    <div className='w-full bg-gray-100 py-4 flex justify-center shadow-md'>
       <div className='relative w-3/5 flex items-center bg-white rounded-full px-4 shadow-sm'>
           <input
              type='text'
              value={search}
              onChange={(e) =>{
                console.log("Search Input:", e.target.value); //debugging
                setSearch(e.target.value);
              }}
              placeholder='Search'
              className='flex-1 p-2 outline-none  bg-transparent text-gray-500'
           />

           <img
              src={assets.search_icon} 
              className='w-5 h-5 cursor-pointer'
              alt="search" />

            <img 
               src={assets.cross_icon}
               alt="close"
               className='w-5 h-5 cursor-pointer ml-2'
               onClick={() => setShowSearch(false)}
               />
       </div>
    </div>
  );
}

export default Searchbar