import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContextProvider';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    const product = products.find((item) => String(item._id) === String(id));

    if (!product) {
        return <h2 className='text-center text-2xl text-white mt-10'>Product Not Found</h2>;
    }

    return (
        <div className=' mx-auto p-6 bg-gray-900 text-white min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                {/* Product Image Grid */}
                <div className='grid grid-cols-2 gap-4'>
                    {product.image?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={product.name}
                            className='w-full h-56  rounded-md shadow-lg'
                        />
                    ))}
                </div>

                {/* Product Details */}
                <div className='p-4'>
                    <h2 className='text-3xl font-bold mb-4 text-teal-300'>{product.name}</h2>
                    <p className='text-gray-300 mb-4'>{product.description}</p>
                    <p className='text-xl font-semibold text-teal-400'>Price: ${product.price}</p>
                    <p className='text-gray-400 mt-2'>
                        Category: <span className='font-semibold'>{product.category}</span>
                    </p>
                    <p className='text-gray-400 mt-2'>
                        Available Sizes: <span className='font-semibold'>{product.size?.join(", ") || "N/A"}</span>
                    </p>

                    {/* Quantity Selector */}
                    <div className='flex items-center mt-4'>
                        <label className='mr-2 font-semibold text-gray-300'>Quantity:</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            className='border border-gray-600 bg-gray-800 text-white rounded px-2 w-16 text-center'
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(product, quantity)}
                        className='mt-6 px-10 py-2 bg-teal-500 text-white font-bold rounded-lg shadow-md hover:bg-teal-400 transition duration-300'
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
