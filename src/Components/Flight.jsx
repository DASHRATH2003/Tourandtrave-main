import React from 'react';
import ImageSlider from './ImageSlider';

// Images for slider - Flight related images
const sliderImages = [
  "https://img.freepik.com/free-photo/airplane-flying-cloudy-sky_144627-132.jpg",

];
const sliderImage = [
  "https://i.pinimg.com/736x/38/59/ac/3859acc59d6ff9be4f7b68ffc2e957ca.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-hd-plane-material-taking-off-in-the-sun-image_1061304.jpg",
  "https://cdn.pngedits.com/uploads/preview/flying-airplane-png-images-hd-11624929290cbizkw6skv.png",

];

const Flight = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/airplane-flying-cloudy-sky_144627-132.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            FLIGHT SERVICES TICKET
          </h1>
          <p className="text-white text-lg leading-relaxed font-bold">
            Our Flight Ticket Services offer hassle-free booking, competitive rates, and comprehensive travel solutions for both domestic and international flights. Let us handle your air travel needs with efficiency and care.
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
                Varshadhaara Tours And Travels offers comprehensive flight ticket booking services for both business and leisure travelers. We provide access to all major airlines, competitive fares, and personalized assistance to ensure a smooth booking experience for all your air travel needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 font-bold">
                We simplify your travel planning! Our flight ticket service provides easy booking, best available rates, and complete support from reservation to check-in. Whether it's a business trip or a family vacation, we ensure you get the most convenient flight options at competitive prices.
              </p>
              <br />
              <p className="font-bold">Seamless bookings. Best rates. Dedicated support throughout your journey. Let us take care of your flight arrangements while you focus on your travel experience.</p>
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
      <i className="fas fa-globe"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Domestic & International Flights</h3>
    <p className="text-gray-600 font-bold">
      Comprehensive booking services for flights to any destination worldwide
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-tags"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
    <p className="text-gray-600 font-bold">
      Access to special fares, discounts and best available rates across airlines
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-headset"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
    <p className="text-gray-600 font-bold">
      Round-the-clock assistance for bookings, changes, and travel emergencies
    </p>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-suitcase"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Complete Travel Packages</h3>
    <p className="text-gray-600 font-bold">
      Bundled flight, hotel, and car rental services for convenient travel planning
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-plane-departure"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Group Bookings</h3>
    <p className="text-gray-600 font-bold">
      Specialized services for corporate and large group travel arrangements
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-yellow-500 text-4xl mb-4">
      <i className="fas fa-clipboard-check"></i>
    </div>
    <h3 className="text-xl font-bold mb-2">Easy Check-in Assistance</h3>
    <p className="text-gray-600 font-bold">
      Support for web check-in, seat selection, and special meal requirements
    </p>
  </div>
</div>


        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Flight Image Side */}
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

export default Flight;