import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-teal-300">Contact Form</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 mt-1"
            required
          />
        </label>
        <label className="block mb-4">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 mt-1"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-400 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
