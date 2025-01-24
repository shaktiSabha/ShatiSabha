"use client"
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to learn more? We're here to help. Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-2 rounded-lg border-black-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 transition duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-2 rounded-lg border-gray-300 shadow-sm focus:border-gray-500 focus:ring-red-500 py-3 px-4 transition duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-2 rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-3 px-4 transition duration-300"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium hover:from-gray-900 hover:to-gray-950 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📍</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
            <p className="text-gray-600 text-center">
              123 Empowerment Street, City, Country
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📧</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Email Us</h2>
            <p className="text-gray-600 text-center">
              info@shaktisabha.org
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-3xl">📞</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Call Us</h2>
            <p className="text-gray-600 text-center">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page