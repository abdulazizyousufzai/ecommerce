import React, { useContext, useEffect, useState } from 'react';
import Productitems from '../components/Productitems';
import { ShopContext } from '../context/ShopContextProvider';

const Bestsaler = () => {
  const { products } = useContext(ShopContext);
  const [latestproduct, setLatestproduct] = useState(products.slice(0, 5));

  useEffect(() => {
    setLatestproduct(products.slice(0, 5));
  }, [products]);

  return (
    <div className="py-10 bg-gray-900 text-white">
      <div className="text-center py-7 font-bold text-4xl font-serif text-teal-300">
        Best Sellers
      </div>
      <p className="text-center pb-4 text-gray-400">
        Explore the most popular and high-demand products.
      </p>
      <div className="grid justify-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-6 px-4">
        {latestproduct.map((item) => (
          <Productitems
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestsaler;
