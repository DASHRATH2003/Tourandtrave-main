import React from 'react';
import ImageSlider from '../ImageSlider';

// Images for slider
const sliderImages = [
  "https://img.freepik.com/premium-photo/rooftop-cargo-carrier-bag-rear-view-car-with-roof-box-alpine-highway-black-roof-box-sporty-white-wagon-family-car-removable-black-car-trunk-luggage-roof-car_782515-7524.jpg",
  "https://www.shutterstock.com/image-photo/touring-car-roof-cargo-box-600nw-2607308571.jpg",
  "https://www.henrys-cars.com/uploads/articles/full_text/d597d9485ed548afe9a9dd1a3576edf2a6a017e1.jpg",
  "https://www.henrys-cars.com/uploads/editor/1719318444-5th-image.jpg",
  "https://previews.123rf.com/images/bialasiewicz/bialasiewicz1407/bialasiewicz140700757/29942647-horizontal-view-of-a-man-trying-to-putting-a-travel-bags-into-a-car.jpg"
];

const OutStation = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZALYu5EEzE9p_66k2clCJkkQ6TLDq8cRlyQ&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            Out Station
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            We provide reliable outstation travel services for long-distance journeys. Our services include comfortable vehicles, experienced drivers, and flexible itineraries to make your outstation trips safe and enjoyable.
          </p>
        </div>

        {/* Social Links */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a
              href="tel:your-number"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a
              href="mailto:your-email"
              className="bg-black text-white p-3 hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="prose prose-lg">
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Varshadhaara Tours And Travels offers comprehensive outstation travel services for long-distance journeys. We provide comfortable vehicles, experienced drivers, and flexible itineraries to ensure safe and enjoyable travel to your destination.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our outstation services include well-maintained vehicles, professional drivers, and customizable travel plans. We ensure comfortable travel, timely arrivals, and reliable service for all your long-distance transportation needs.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>From weekend getaways to extended trips, our outstation services are designed to provide comfort and reliability. Trust us to handle your long-distance travel needs with professionalism and care.</p>
                             <p className="font-bold">From weekend getaways to long business trips, travel stress-free with our reliable outstation services and expert drivers.</p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider images={sliderImages} />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-route"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Multiple Destinations</h3>
            <p className="text-gray-600 font-bold">Travel to any destination across India</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-car"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Choice of Vehicles</h3>
            <p className="text-gray-600 font-bold">Wide range of vehicles to choose from</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Safe Travel</h3>
            <p className="text-gray-600 font-bold">Experienced and verified drivers</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Car Image Side */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8">
               <ImageSlider images={[
                  "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
                  "https://tourandtrave-main.vercel.app/images/cars/innovaedit.jpg",
                  "https://imgd.aeplcdn.com/640X480/image/used/qjcj10hml1gx.jpg?q=80",
                  "https://www.xdrivecars.com/assets/images/car_images/Used-cars-in-trivandrum--1701202525084.webp",
                  "https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2719170d1737952850-2024-maruti-dzire-review-img_20250126_171644743.jpg"
                ]} />
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 font-bold mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 font-bold mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Comment or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-block bg-white text-red-500 border-2 border-red-500 px-8 py-2.5 rounded font-medium hover:bg-red-500 hover:text-white transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutStation;