import React from 'react';
import ImageSlider from './ImageSlider';

// Images for slider - Train related images
const sliderImages = [
  
  "https://images.pexels.com/photos/10662882/pexels-photo-10662882.jpeg"
];
const sliderImage = [
  
  "https://www.financialexpress.com/wp-content/uploads/2023/11/1-122.jpg",
  "https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/bw-travel/media/media_files/2025/07/31/indian-railways-2025-07-31-12-35-59.png  ",
  "https://wallpapercave.com/wp/wp4740876.jpg",
];

const Train = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-illustration/abstract-image-truck-plane-lorry-600nw-1935646048.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            TRAIN TICKET SERVICES
          </h1>
          <p className="text-white text-lg leading-relaxed font-bold">
          Our Train Ticket Services are designed to ensure convenient, reliable, and affordable travel for all your needs. 
          With easy booking options and excellent customer support, we provide end-to-end train travel solutions.
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
              <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                Varshadhaara Tours And Travels Our Employee Transport Service is tailored for organizations seeking reliable, safe, and timely daily commute solutions for their staff. We offer customized routing, real-time tracking, and a fleet of well-maintained vehicles to ensure seamless employee movement and enhanced productivity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 font-bold">
              We make everyday travel easier for your team! Our employee transport service is designed to provide safe, punctual, and stress-free commuting. Whether it's day or night shifts, we ensure your employees reach work and home comfortably and on time.
              </p>
              <br />
              <p className="font-bold">Safe rides. Timely drops. Hassle-free commutes for your entire workforce. Leave the transport to us — and focus on growing your business.</p>
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
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-train"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Domestic Train Tickets</h3>
    <p className="text-gray-600 font-bold">
      Hassle-free booking for all domestic train routes with multiple class options
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-blue-500 text-4xl mb-4">
      <i className="fas fa-clock"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Tatkal & Premium Tatkal</h3>
    <p className="text-gray-600 font-bold">
      Last-minute booking services with Tatkal and Premium Tatkal options to secure confirmed seats even during peak travel seasons
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-green-500 text-4xl mb-4">
      <i className="fas fa-globe"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">International Rail Passes</h3>
    <p className="text-gray-600 font-bold">
      Comprehensive international rail passes for seamless travel across multiple countries with flexible duration options
    </p>
  </div>
</div>


        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Train Image Side */}
            <div className="md:w-1/2">                                         
              <div className="bg-gray-100 rounded-lg p-8">
               <ImageSlider images={sliderImage} />
              </div>
            </div>

            {/* Form Side */}
             <div className="md:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-gray-700 mb-1 font-bold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1 font-bold">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1 font-bold">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 mb-1 font-bold">
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
                  <label className="block text-gray-700 mb-1 font-bold">
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
                  <label className="block text-gray-700 mb-1 font-bold">
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
                    className="inline-block bg-white text-red-500 border-2 border-red-500 px-8 py-2.5 rounded font-bold hover:bg-red-500 hover:text-white transition-colors duration-300"
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

export default Train;
