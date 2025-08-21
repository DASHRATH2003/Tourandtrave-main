import React from 'react';
import ImageSlider from '../ImageSlider';

// Images for slider
const sliderImages = [
  "https://www.amdelaa.com/assets/uploads/media-uploader/img-20231011-wa00051697043998.jpg",
  "https://globetruckingpunjab.com/images/library/general/Bharat-benz-Staff-Bus.jpg",
  "https://globetruckingpunjab.com/images/library/general/1%20Globe%20Trucking.jpeg",
  "https://www.prabaltrucking.com/wp-content/uploads/2019/05/Staff-Bus.jpg",
  "https://img.freepik.com/premium-photo/white-passenger-bus-isola_826551-14778.jpg?semt=ais_hybrid&w=740&q=80"
];

const EmployeeTransport = () => {
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
            EMPLOYEE TRANSPORT
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            We provide comprehensive employee transportation services, ensuring safe and reliable daily commutes for your workforce. Our services include route optimization, real-time tracking, and professional drivers to enhance employee satisfaction and productivity.
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
                Varshadhaara Tours And Travels offers reliable employee transportation services designed to meet the daily commuting needs of your workforce. We provide safe, comfortable, and punctual transportation solutions that enhance employee satisfaction and productivity.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our employee transport services include route optimization, real-time tracking, professional drivers, and well-maintained vehicles. We ensure timely pickups and drops, comfortable travel, and reliable service for your employees' daily commute.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>From daily office commutes to special event transportation, our employee transport services are designed to provide convenience and reliability. Trust us to handle your workforce transportation needs with professionalism and care.</p>
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
      <i className="fas fa-user-tie"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Corporate Employee Transport</h3>
    <p className="text-gray-600 font-bold">
      Reliable daily commute services for employees across all major zones
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-clock"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">On-Time Pickups & Drops</h3>
    <p className="text-gray-600 font-bold">
      Timely and well-coordinated schedules to ensure smooth employee transit
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-shield-alt"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Safety & Tracking</h3>
    <p className="text-gray-600 font-bold">
      Live vehicle tracking and verified drivers for secure employee travel
    </p>
  </div>
</div>


        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Car Image Side */}
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                      <div className="text-sm text-gray-600 font-bold mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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

export default EmployeeTransport;
