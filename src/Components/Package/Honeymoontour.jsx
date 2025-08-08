import React from 'react';
import ImageSlider from '../ImageSlider';

const Honeymoontour = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yysQoWlDd8ulNym-CDXOr-mCBDNF6JHgRQ&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            HaneymoonTour
          </h1>
          <p className="text-white text-lg leading-relaxed">
          Begin your new journey together with an unforgettable honeymoon, curated by VARSHADHAARA TOURS AND TRAVELS. 
          We offer personalized honeymoon tour packages that combine romance, luxury, and adventure in stunning destinations across India and abroad.
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
                Varshadhaara Tours And Travels offers exclusive honeymoon tour packages designed for couples. We ensure privacy, comfort, and luxury throughout your romantic journey with our premium services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our honeymoon packages include luxury vehicles, professional drivers, and personalized service to make your special trip memorable and stress-free.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Luxury Vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Private Tours</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Professional chauffeur</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">24/7 Support Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://5.imimg.com/data5/SELLER/Default/2022/6/GI/LV/SJ/2217954/andaman-honeymoon-tour-package-b-service.jpg",
                "https://t4.ftcdn.net/jpg/01/78/64/83/360_F_178648334_ZUgB7yHG2vv89LOJ22OIxbqtIbUh42GT.jpg",
                "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1024960.jpg&fm=jpg",
                "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZXltb29ufGVufDB8fDB8fHww&w=1000&q=80",
                "https://img.freepik.com/premium-photo/couple-relaxing-beach-sunset_1282314-1704.jpg"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-car"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Vehicles</h3>
            <p className="text-gray-600">Luxury cars for your romantic journey</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Available round the clock for your convenience</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Special Care</h3>
            <p className="text-gray-600">Extra attention to make your trip special</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Car Image Slider Side */}
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

export default Honeymoontour;
