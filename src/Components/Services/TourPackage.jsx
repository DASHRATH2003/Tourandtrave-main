import React from 'react';
import ImageSlider from '../ImageSlider';
import tourpackage1 from '../../assets/tourpackage1.jpg';
import tourpackage2 from '../../assets/tourpackage5.webp';
import tourpackage3 from '../../assets/tourpackage3.jpg';
import tourpackage4 from '../../assets/tourpackage4.jpg';
import tour22 from '../../assets/tour22.webp';

// Images for slider
const sliderImages = [
  "https://www.ayodhyatourism.online/assets/images/ayodhya-temple.webp",
  "https://www.ayodhyacarhire.com/wp-content/uploads/2024/04/prem-mandir-1200x900.jpg",
  "https://saishishirtours.in/wp-content/uploads/2024/05/bhimashankar-jyotirlinga-temple.webp",
  "https://devbhomidarshan.com/wp-content/uploads/2024/04/pexels-alok-kumar-15031440-2-1024x683.jpg",
  "https://www.adigasyatra.com/admin/uploads/gallery/1652187498.jpeg"
];

const TourPackage = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            TOUR PACKAGE SERVICE
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            We offer customized tour packages for domestic and international travel. Our packages include transportation, accommodation, and guided tours to make your travel experience memorable and hassle-free.
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
      Varshadhaara Tours And Travels offers customized tour packages for domestic and international travel. We provide comprehensive travel solutions including transportation, accommodation, and guided tours to make your travel experience memorable and hassle-free.
    </p>
    <p className="text-gray-700 font-bold leading-relaxed mb-6">
      Our tour packages are designed to cater to different travel preferences and budgets. We ensure comfortable travel, quality accommodation, and professional guidance throughout your journey to make it an unforgettable experience.
    </p>
    
    <p className='text-gray-700 font-bold leading-relaxed mb-6'>From adventure tours to luxury travel, our tour packages are designed to provide unique experiences. Trust us to create memorable journeys that exceed your expectations.</p>
   
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
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Customized Tours</h3>
            <p className="text-gray-600 font-bold">Tailored travel experiences</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-hotel"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Guided Tours</h3>
            <p className="text-gray-600 font-bold">Professional tour guides</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">All-Inclusive</h3>
            <p className="text-gray-600 font-bold">Complete travel packages</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Tour Package Image Side */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8">
                <ImageSlider images={[
                  tourpackage1,
                  tourpackage2,
                  tourpackage3,
                  tour22,
                  tourpackage4
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

export default TourPackage;