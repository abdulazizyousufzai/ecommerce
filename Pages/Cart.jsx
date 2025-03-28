import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, addToCart } = useContext(ShopContext);

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className=' mx-auto p-6 min-h-screen bg-gray-900 text-white'>
            <h2 className='text-3xl font-bold text-center mb-6 text-teal-300'>🛒 Your Cart</h2>

            {cart.length === 0 ? (
                <p className='text-center text-gray-400 text-lg'>
                    Your cart is empty. <Link to="/collection" className="text-teal-400 hover:underline">Shop Now</Link>
                </p>
            ) : (
                <div className='grid gap-4 max-w-3xl mx-auto'>
                    {cart.map((item) => (
                        <div key={item._id} className='flex items-center justify-between bg-gray-800 shadow-lg p-4 rounded-lg border border-gray-700'>
                            <img src={item.image[0]} alt={item.name} className='w-20 h-20 object-cover rounded-md' />
                            <div className='flex-1 px-4'>
                                <h3 className='text-lg font-semibold text-white'>{item.name}</h3>
                                <p className='text-gray-400'>Price: <span className="font-bold text-teal-400">${item.price.toFixed(2)}</span></p>
                            </div>
                            {/* Quantity Controls */}
                            <div className='flex items-center'>
                                <button
                                    onClick={() => item.quantity > 1 ? addToCart(item, -1) : removeFromCart(item._id)}
                                    className='bg-gray-600 px-3 py-1 rounded-l text-lg text-white hover:bg-gray-500 transition'
                                    disabled={item.quantity === 1}
                                >-</button>
                                <span className='px-4 text-white font-semibold'>{item.quantity}</span>
                                <button
                                    onClick={() => addToCart(item, 1)}
                                    className='bg-gray-600 px-3 py-1 rounded-r text-lg text-white hover:bg-gray-500 transition'
                                >+</button>
                            </div>
                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className='bg-red-600 text-white px-4 py-2 rounded ml-4 hover:bg-red-500 transition'
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Total price & checkout */}
                    <div className='mt-6 p-4 bg-gray-800 rounded-lg shadow-md text-right border border-gray-700'>
                        <p className='text-xl font-semibold text-white'>Total: <span className="text-teal-400">${totalPrice.toFixed(2)}</span></p>
                        <button className='mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-400 transition'>
                            <Link to="/checkout">Proceed to Checkout</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
