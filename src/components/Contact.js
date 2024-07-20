import { useState } from "react";

const Contact=()=>{
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        message: '',
      });
    
      const [showToast, setShowToast] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send data to server)
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          address: '',
          message: '',
        });
      };
    
      return (
        <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@123"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your number"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              placeholder="Enter your Full Address"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
          Thank you for submitting the form!
        </div>
      )}
    </div>
      );
}
export default Contact;