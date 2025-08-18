import React from 'react';
import ImageSlider from '../ImageSlider';
import widding1 from '../../assets/widding1.jpg';
import widding2 from '../../assets/widding2.jpg';
import widding3 from '../../assets/widding3.jpg';
import widding4 from '../../assets/widding4.jpg';

const Weddingtour = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZvXdTJ-FO8nZDlGNuxaeSPZd91sKJZhiAw&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            WEDDING TOUR
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            Make your wedding day perfect with our comprehensive wedding tour packages. We provide complete wedding transportation services, including decorated vehicles and professional coordination for your special day.
          </p>
        </div>

        {/* Social Links */}
        <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/+919916599719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors group relative"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span className="absolute right-full mr-2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                WhatsApp: +919916599719
              </span>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors group relative"
            >
              <i className="fas fa-phone text-2xl"></i>
              <span className="absolute right-full mr-2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Call: +919916599719
              </span>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
              className="bg-black text-white p-3 hover:bg-gray-800 transition-colors group relative"
            >
              <i className="fas fa-envelope text-2xl"></i>
              <span className="absolute right-full mr-2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Email: infovtt@varshadhaaratours.com
              </span>
            </a>
          </div>
        </div>
        
        {/* Mobile Social Links */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex justify-around py-3">
            <a
              href="https://wa.me/+919916599719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors relative group"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                WhatsApp: +919916599719
              </span>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors relative group"
            >
              <i className="fas fa-phone text-xl"></i>
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Call: +919916599719
              </span>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors relative group"
            >
              <i className="fas fa-envelope text-xl"></i>
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Email: infovtt@varshadhaaratours.com
              </span>
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
                Varshadhaara Tours And Travels offers comprehensive wedding tour packages designed to make your special day perfect. We provide complete wedding transportation services, including decorated vehicles and professional coordination for all your wedding events.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our wedding packages include decorated vehicles, professional drivers, and complete coordination for all wedding events. We ensure timely service, elegant presentation, and reliable transportation to make your wedding day truly special and memorable.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>From pre-wedding events to the main ceremony, our wedding packages are designed to provide elegant and reliable transportation. Trust us to handle all your wedding transportation needs with professionalism and care.</p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://thumbs.dreamstime.com/b/beach-wedding-canopy-set-up-ocean-background-54592547.jpg",
                "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?cs=srgb&dl=pexels-viresh-studio-1444442.jpg&fm=jpg",
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
                "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-car-side"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Decorated Vehicles</h3>
            <p className="text-gray-600 font-bold">Beautifully decorated wedding cars</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Complete Coordination</h3>
            <p className="text-gray-600 font-bold">Professional wedding event management</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Timely Service</h3>
            <p className="text-gray-600 font-bold">Punctual transportation for all events</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Wedding Image Slider Side */}
            <div className="md:w-1/2">                                         
              <div className="bg-gray-100 rounded-lg p-8">
                <ImageSlider images={[
                  widding1,
                  widding2,
                  widding3,
                  widding4
                ]} />
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Name <span className="text-yellow-500">*</span>
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
                  <label className="block text-gray-700 font-bold mb-1">
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
                  <label className="block text-gray-700 font-bold mb-1">
                    Comment or Message{" "}
                    <span className="text-yellow-500">*</span>
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

export default Weddingtour;
