import React from 'react';
import ImageSlider from '../ImageSlider';

const ResortPackage = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://fortunetours.in/wp-content/uploads/2023/11/Andaman.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            Resort Package
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Experience luxury and comfort with our curated selection of over 200+ premium resorts. 
            From beachfront paradises to mountain retreats, we offer the perfect getaway for every traveler.
          </p>
        </div>

        {/* Social Links */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/+919916599719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
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
              <p className="text-gray-700 leading-relaxed mb-6">
                Varshadhaara Tours And Travels brings you exclusive access to over 200+ premium resorts 
                across India and beyond. Our carefully curated resort packages combine luxury accommodations 
                with exceptional service to create unforgettable experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're seeking a beachfront paradise, a mountain retreat, or a wildlife resort experience, 
                our diverse portfolio caters to every preference. Each resort in our collection is handpicked 
                to ensure the highest standards of comfort, service, and amenities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From luxury palace hotels to boutique wellness retreats, we offer comprehensive packages that include 
                accommodation, dining experiences, recreational activities, and local excursions. Our team ensures 
                every detail is perfectly arranged for a hassle-free and memorable stay.
              </p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://etripto.in/uploads/0000/1/2025/01/17/maldives-tour-packages.jpg",
                "https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg",
                "https://content.jdmagicbox.com/v2/comp/chennai/k5/044pxx44.xx44.200709184440.p2k5/catalogue/pradee-queen-holiday-resort-porur-chennai-car-rental-4pd84u4wnc.jpg",
                "https://www.travelchords.com/gallery/uscggaonqd/3ohaukw.jpg",
                "https://z.cdrst.com/foto/hotel-sf/d67688e/granderesp/foto-hotel-d675de4.jpg"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
            <p className="text-gray-600">24/7 concierge service and personalized attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-spa"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Luxury Amenities</h3>
            <p className="text-gray-600">World-class facilities and fine dining experiences</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-gray-600">Handpicked resorts in scenic destinations</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Resort Image Slider Side */}
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
                  <label className="block text-gray-700 mb-1">
                    Name <span className="text-yellow-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">First</div>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone <span className="text-yellow-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Comment or Message <span className="text-yellow-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-block bg-white text-yellow-500 border-2 border-red-500 px-8 py-2.5 rounded font-medium hover:bg-gray-500 hover:text-white transition-colors duration-300"
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

export default ResortPackage; 