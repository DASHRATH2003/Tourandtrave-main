import React from 'react';
import ImageSlider from './ImageSlider';

// Images for slider - Technology related images
const sliderImages = [
  "https://www.locate2u.com/wp-content/uploads/A-1-29.webp",
  "https://img.freepik.com/premium-photo/woman-is-pressing-panic-button-car-red-emergency-alarm-vehicle_370059-516.jpg",
  "https://png.pngtree.com/png-clipart/20221110/original/pngtree-car-location-time-alert-picture-image_3607727.png",
  "https://pictortelematics.com/assets/images/resource/pictor-telematics-Driver-Behavior.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/43/Dashcams_P1210466.JPG"
];

const Technology = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/digital-screen-with-holographic-symbols_53876-104288.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            Technology Solutions
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Cutting-edge technology solutions to transform your business. From web development to AI integration, 
            we provide innovative tech services that drive growth and efficiency.
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
              <p className="text-gray-700 leading-relaxed mb-6">
                At Varshadhaara Tours And Travels, we offer comprehensive technology solutions designed to meet the evolving needs of modern businesses. Our team of expert developers and tech specialists work closely with you to create custom solutions that align with your business goals and enhance your digital presence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From responsive web applications to mobile app development, cloud services, and AI integration, we provide end-to-end technology services that help you stay ahead in today's competitive market. Our solutions are scalable, secure, and built with the latest technologies to ensure optimal performance.
              </p>
              <br />
              <p>Innovative solutions. Seamless integration. Future-ready technology for your business growth. Partner with us to transform your digital landscape.</p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider images={sliderImages} />
          </div>
        </div>

        {/* Safety & Technology Features */}
        <h2 className="text-3xl font-bold text-center mb-12 mt-16">Advanced Safety & Technology Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Panic Alarm</h3>
            </div>
            <p className="text-gray-700">
              Alarm message sent to multiple supervisors to ensure immediate attention and utmost importance.
            </p>
           
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">GPS Tracking</h3>
            </div>
            <p className="text-gray-700">
              Real-time tracking and tracing of vehicles round the clock to ensure safety and verify chauffeurs follow dedicated routes.
            </p>
           
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <i className="fas fa-bell text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Real-Time Alerts</h3>
            </div>
            <p className="text-gray-700">
              Alerts via SMS & Email for Panic, Geofence Breach, Device Tampering, and Overspeed.
            </p>
           
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <i className="fas fa-car text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Driver Behaviour Monitoring</h3>
            </div>
            <p className="text-gray-700">
              Tracks rash driving, harsh braking, sharp turns, and overspeeding to improve passenger safety.
            </p>
           
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 p-3 rounded-full mr-4">
                <i className="fas fa-draw-polygon text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Geo-fencing</h3>
            </div>
            <p className="text-gray-700">
              Immediate notification when the vehicle enters or exits a pre-set route or area.
            </p>
          
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 p-3 rounded-full mr-4">
                <i className="fas fa-video text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">In-Vehicle CCTV</h3>
            </div>
            <p className="text-gray-700">
              Live video streaming to monitor passenger and driver activities for enhanced security.
            </p>
           
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-3 rounded-full mr-4">
                <i className="fas fa-gas-pump text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Fuel Monitoring</h3>
            </div>
            <p className="text-gray-700">
              Monitors real-time fuel usage to prevent theft, reduce wastage, and improve efficiency.
            </p>
           
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <i className="fas fa-route text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Route Optimization</h3>
            </div>
            <p className="text-gray-700">
              AI-powered shortest route suggestions based on traffic and weather.
            </p>
          
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 p-3 rounded-full mr-4">
                <i className="fas fa-qrcode text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Contactless Ticketing</h3>
            </div>
            <p className="text-gray-700">
              QR code and NFC-based boarding for a faster, cashless experience.
            </p>
           
          </div>
        </div>

        {/* Technology Services */}
        

        {/* Additional Services */}
        

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Tech Image Side */}
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
                        placeholder="First"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
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
                    placeholder="your@email.com"
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
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Comment or Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your technology needs..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;