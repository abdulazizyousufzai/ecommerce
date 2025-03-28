import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-100 p-10 text-gray-700'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start px-5'>

        {/*Brand info*/}
        <div className='md:w-1/3'>
        <img src={assets.logo} alt="" />
        <p className='mt-3 text-sm '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil quia, veritatis quasi nisi ad iusto nulla temporibus consequatur iste?
        </p>
        </div>
        <div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer