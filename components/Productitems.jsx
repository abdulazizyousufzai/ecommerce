import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextProvider';

export default function Productitems({ id, image, price, name }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/products/${id}`}
      className="cursor-pointer text-white bg-gray-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-teal-400 text-lg font-semibold">{name}</p>
      <p className="text-gray-300 text-sm font-light">
        {price} {currency}
      </p>
    </Link>
  );
}
