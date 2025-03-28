import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContextProvider';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, getTotalItems, currency } = useContext(ShopContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        paymentMethod: "creditCard",
        shippingOption: "standard",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.address || !formData.phone) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Order placed successfully!");
        navigate("/");
    };

    return (
        <div className="mx-auto p-6 min-h-screen bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center text-teal-300">Checkout</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <label className="text-gray-300">Full Name</label>
                <input type="text" name="name" placeholder="Enter your name" className="border p-2 bg-gray-700 text-white rounded-md" value={formData.name} onChange={handleChange} required />

                <label className="text-gray-300">Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" className="border p-2 bg-gray-700 text-white rounded-md" value={formData.email} onChange={handleChange} required />

                <label className="text-gray-300">Shipping Address</label>
                <input type="text" name="address" placeholder="Enter your address" className="border p-2 bg-gray-700 text-white rounded-md" value={formData.address} onChange={handleChange} required />

                <label className="text-gray-300">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" className="border p-2 bg-gray-700 text-white rounded-md" value={formData.phone} onChange={handleChange} required />

                <label className="text-gray-300">Payment Method</label>
                <select name="paymentMethod" className="border p-2 w-full bg-gray-700 text-white rounded-md" value={formData.paymentMethod} onChange={handleChange}>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cashOnDelivery">Cash On Delivery</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className="mt-4 px-6 py-2 bg-teal-500 text-white font-bold rounded-md hover:bg-teal-400 transition duration-300">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
