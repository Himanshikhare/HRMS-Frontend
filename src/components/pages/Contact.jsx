import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 min-h-screen py-10 px-4" id="contact">
                {/* Page Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
                    <p className="text-gray-600 mt-2">
                        We’d love to hear from you! Reach out using the form below or contact us directly.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Company Info & Map */}
                    <div className="space-y-6">
                        {/* Company Info */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                            <p className="text-gray-600 mb-2">123 HRMS Tower, New City, Country</p>
                            <p className="text-gray-600 mb-2">Phone: +1 (123) 000-12121</p>
                            <p className="text-gray-600 mb-2">Email: contact@hrms.com</p>
                        </div>

                        {/* Embedded Map */}
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509567!2d-122.41941548468159!3d37.77492927975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c01a563af%3A0x7e7e35af0737b4c!2sGoogle!5e0!3m2!1sen!2sus!4v1615453092145!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-2xl"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600 text-2xl"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 text-2xl"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-700 text-2xl"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact