import React from 'react';
import ImageSlider from '../ImageSlider';

// Images for slider
const sliderImages = [
  "https://5.imimg.com/data5/DL/CT/GLADMIN-47171644/corporate-tours-service.png",
  "https://media.istockphoto.com/id/1343847065/photo/multi-ethnic-people-going-on-business-trip.jpg?s=612x612&w=0&k=20&c=kVq0glJjcH24KflUtAhFmFSy747YprHt9OHH_ro1hf8=",
  "https://img.freepik.com/free-photo/full-length-handsome-young-man-suit-walking-with-luggage-outside-office-building_662251-2111.jpg",
  "https://media.istockphoto.com/id/1489123986/photo/travel-for-business-team-at-airport-and-men-catch-flight-for-work-trip-with-conference-or.jpg?s=612x612&w=0&k=20&c=TtfyyN-mkRKAHiOcmNV5IHOWSuL2THEmPgCWXlj7EBM=",
  "https://media.istockphoto.com/id/1485259982/photo/travel-passport-and-phone-with-black-man-in-airport-for-social-media-business-trip-and-and.jpg?s=612x612&w=0&k=20&c=9xA_xPtII5F9tFn1cEw22ONgHimsf_a7M_IEHeo6Wzo="
];

const CorporateTour = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYiVlFEsWBjJK9jDMWqBuu2NsKlWZGydxdA&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            CorporateTour
          </h1>
          <p className="text-white text-lg leading-relaxed">
          At VARSHADHAARA TOURS AND TRAVELS, we specialize in organizing seamless corporate tours tailored to your company's goals and culture. 
          Whether it's team-building getaways, leadership retreats, incentive travel, or business conferences.
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
                Varshadhaara Tours And Travels specializes in organizing corporate tours and team outings that combine business with leisure. We understand the unique requirements of corporate clients and deliver exceptional experiences that strengthen team bonds.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From team building activities to corporate retreats, we handle all aspects of your corporate tour including transportation, accommodation, meeting facilities, and recreational activities.
              </p>
              <p>From team-building activities to corporate retreats, we manage every detail of your corporate tour—covering transportation, premium accommodations, meeting facilities, and engaging recreational experiences to ensure a productive and enjoyable trip.</p>
            
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
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Building</h3>
            <p className="text-gray-600">Engaging activities for team bonding</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-building"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Facilities</h3>
            <p className="text-gray-600">Professional meeting spaces and amenities</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
            <p className="text-gray-600">Dedicated corporate travel support</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Vehicle Image Side */}
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
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
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
                  <label className="block text-gray-700 mb-1">
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
                  <label className="block text-gray-700 mb-1">
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

export default CorporateTour;