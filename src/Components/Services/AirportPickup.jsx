import React from 'react';
import ImageSlider from '../ImageSlider';

// Images for slider
const sliderImages = [
  "https://5.imimg.com/data5/SELLER/Default/2024/2/388918827/HY/SC/PM/103718232/mumbai-airport-pickup-drop.png",
  "https://wallpapercrafter.com/desktop6/1506279-vehicle-transportation-system-car-airplane-engine.jpg",
  "https://c4.wallpaperflare.com/wallpaper/239/360/907/airport-airplane-tilt-shift-wallpaper-preview.jpg",
  "https://www.seekpng.com/png/full/56-568053_airport-shuttle-lincoln-towncar-private-car-service.png",
  "https://w7.pngwing.com/pngs/534/1022/png-transparent-datsun-go-car-nissan-datsun-redi-go-car.png"
];

const AirportPickup = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/643963570/photo/traveler-at-the-airport.jpg?s=612x612&w=0&k=20&c=T2qdgvNu-sPg8kFLuXiQVIQy5kj6VbgtUZgEobn6vpw=')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            AIRPORT PICKUP AND DROP

          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
          Whether you're arriving from a business trip or starting a vacation, 
        our airport pickup service ensures a smooth, comfortable, and timely experience. 
        With a fleet of clean vehicles and courteous drivers, we guarantee safe and hassle-free 
        transportation from the airport to your destination.
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
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">
            Seamless Airport Transfers in Bangalore

</h2>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
               Varshadhaara Tours And Travels provides reliable and comfortable airport transfer services in Bangalore. We ensure timely pickup and drop-off services to and from the airport, making your journey stress-free and convenient.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our airport pickup and drop service is designed to provide you with a seamless travel experience. We monitor flight timings and adjust our schedule according to any delays or changes in your flight schedule.
              </p>
              <br />
              <p className="font-bold">Sit back and relax — we've got your airport travel covered! Whether your flight is early or delayed, our team tracks it in real-time and adjusts accordingly. With our pickup and drop service, you'll never have to worry about waiting or rushing.</p>
              <br />
              <p className="font-bold">We track your flight, adjust for delays, and get you there on time — every time. Trust us for punctual and comfortable airport pickup & dro</p>
               
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
              <i className="fas fa-plane-arrival"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Flight Monitoring</h3>
            <p className="text-gray-600 font-bold">Real-time flight tracking for timely service</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
            <p className="text-gray-600 font-bold">Available round the clock for your convenience</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Meet & Greet</h3>
            <p className="text-gray-600 font-bold">Professional greeting service at the airport</p>
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
                   "https://5.imimg.com/data5/IK/YH/GLADMIN-9705085/force-tempo-traveller-500x500.jpg",
                 
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

export default AirportPickup;