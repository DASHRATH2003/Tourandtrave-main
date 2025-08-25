import React from 'react';
import ImageSlider from '../ImageSlider';

const ResortPackage = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://fortunetours.in/wp-content/uploads/2023/11/Andaman.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            RESORT PACKAGE
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            Experience luxury and comfort with our resort package tours. We offer exclusive resort stays with premium amenities, ensuring a relaxing and memorable vacation experience for you and your family.
          </p>
        </div>

        {/* Social Links */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a
              href="https://wa.me/+919916599719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
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
                Varshadhaara Tours And Travels offers luxury resort package tours designed to provide the ultimate vacation experience. We partner with premium resorts to offer exclusive stays with world-class amenities and services.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our resort packages include luxury accommodations, premium amenities, and exclusive services to ensure a relaxing and memorable vacation. We provide comfortable transportation and professional service throughout your resort stay.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>From beach resorts to mountain retreats, our resort packages are designed to provide luxury and comfort. Trust us to create the perfect resort vacation experience for you and your family.</p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://etripto.in/uploads/0000/1/2025/01/17/maldives-tour-packages.jpg",
                "https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg",
                "https://content.jdmagicbox.com/v2/comp/chennai/k5/044pxx44.xx44.200709184440.p2k5/catalogue/pradee-queen-holiday-resort-porur-chennai-car-rental-4pd84u4wnc.jpg",
                "https://www.travelchords.com/gallery/uscggaonqd/3ohaukw.jpg",
                "https://z.cdrst.com/foto/hotel-sf/d67688e/granderesp/foto-hotel-d675de4.jpg"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Luxury Resorts</h3>
            <p className="text-gray-600 font-bold">Premium resort accommodations</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-spa"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Amenities</h3>
            <p className="text-gray-600 font-bold">World-class facilities and services</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Services</h3>
            <p className="text-gray-600 font-bold">Personalized resort experiences</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Resort Image Slider Side */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8">
              <ImageSlider images={[
                
                  "https://media1.popsugar-assets.com/files/thumbor/tr0Zhr7kq8O8Atn1shIi3InpMhc=/fit-in/792x482/top/filters:format_auto():upscale()/2018/06/28/786/n/44701584/0f47d9935b352038eaed11.65637336_.jpg",
                  "https://uploads-ssl.webflow.com/65e2e78d061034866949e5e6/65e5c6d6d1e4ea4c7336df69_658bb96e661f9aca80596bde_1592460460_44037231_242446576447985_8851411500900810752_o.jpeg",
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567189600.webp?k=825934be6f07a472bedcda7a4c57d02108bd594a379d591f86e12c7ec84b2cc1&o=",
                 
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

export default ResortPackage; 