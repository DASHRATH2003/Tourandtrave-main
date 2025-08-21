import React from 'react';
import ImageSlider from '../ImageSlider';

// Images for slider
const sliderImages = [
  "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyMi1rdWwtMjJfMi5qcGc.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNQTUv7jV5nBtlVEQdS33llZhQ9AO6-JbWw&s",
  "https://astiblog.storage.googleapis.com/wp-content/uploads/2024/03/07173246/The-Role-of-Mobile-Apps-in-Employee-Transport-Solutions-1024x683.jpg",
  "https://www.appdupe.com/img/employee-transportation/whychoseus.webp",
  "https://mobisoftinfotech.com/assets/images/products/employe-transport-management-system/shuttle-service-app-development-mockup.png"
];

const AppDuty = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4I5edOER2BW9rqUQMR3Yrxkxw-noGyD9pg&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            With App Duty/Application Based on employee Transtortation service
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
          We offer both app-based and traditional duty services to suit your preferences and business needs. 
          Our app-based service provides modern features like live tracking, digital duty slips, and instant notifications.
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
                Varshadhaara Tours And Travels offers flexible duty options with or without app-based tracking. Choose between traditional service or enhanced digital tracking for real-time monitoring of your transportation needs.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our app-based duty service provides advanced features like live tracking, digital duty logs, and instant notifications, while our traditional service maintains the same high quality with manual reporting and direct communication.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>Whether you prefer the convenience of modern technology or the comfort of traditional methods, our duty services have you covered. Experience real-time tracking and digital updates with our app, or enjoy dependable manual coordination with our classic service.</p>
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
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">App Tracking</h3>
            <p className="text-gray-600 font-bold">Real-time location monitoring</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-clipboard-list"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Logs</h3>
            <p className="text-gray-600 font-bold">Automated trip documentation</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Direct Service</h3>
            <p className="text-gray-600 font-bold">Traditional communication option</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Vehicle Image Side */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8">
               <ImageSlider images={[
                 "https://i.postimg.cc/z3Y1jGFN/tatainnova.jpg",
                 "https://images.jdmagicbox.com/quickquotes/images_main/maruti-suzuki-swift-dzire-tour-s-bs6-pearl-metallic-arctic-white-271052469-42tlj.png",
                 "https://tourandtrave-main.vercel.app/images/cars/image3.jpg",
                 "https://www.financialexpress.com/wp-content/uploads/2020/08/Toyota-Fortuner-TRD-660.jpg",
                 "https://imgd.aeplcdn.com/664x374/n/ima73cb_1726651.jpg?q=80",
                 "https://i.postimg.cc/6Q9bmq0D/tttttttttttt.jpg",
               
                 "https://www.ecorentacar.com/wp-content/uploads/2024/09/Force-Urbania-04.jpg",
               
                 "https://i.postimg.cc/9QjWPJL9/bus1.jpg",
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

export default AppDuty;