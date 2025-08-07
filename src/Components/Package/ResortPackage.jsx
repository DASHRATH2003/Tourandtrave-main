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
            "url('https://imgproxy.divecdn.com/I4fMjeDDtWMG0_S4fDOYavavQz9s8UQqq-lcw07vmJc/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzM2MTM2MzE2X2dnaHlCY2kuanBn.webp')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            Resort Packages
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Experience luxury and comfort with our curated selection of over 200+ premium resorts. 
            From beachfront paradises to mountain retreats, we offer the perfect getaway for every traveler.
          </p>
        </div>

        {/* Desktop Social Links */}
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
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Slider Side */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://etripto.in/uploads/0000/1/2025/01/17/maldives-tour-packages.jpg",
                "https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg",
                "https://content.jdmagicbox.com/v2/comp/chennai/k5/044pxx44.xx44.200709184440.p2k5/catalogue/pradee-queen-holiday-resort-porur-chennai-car-rental-4pd84u4wnc.jpg",
                "https://www.travelchords.com/gallery/uscggaonqd/3ohaukw.jpg",
                "https://z.cdrst.com/foto/hotel-sf/d67688e/granderesp/foto-hotel-d675de4.jpg",
   
               
                
              ]} 
            />
          </div>

          {/* Text Content Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-yellow-700 mb-6">
              Luxury Resort Experiences
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Discover our extensive network of over 200+ carefully selected resorts across prime locations. 
              We've partnered with the most prestigious properties to offer you unparalleled luxury and comfort.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://d2azgexewbdl23.cloudfront.net/content/moon_palace_punta_cana_palace_resorts_cee955847a.webp" 
                  alt="Palace Resort"
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">Palace Resorts</h3>
                <p className="text-sm text-gray-600">Experience royal luxury in heritage properties</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://static.wixstatic.com/media/b13632_592936a53e664fd48316421c4b2aafb9~mv2.jpg/v1/fill/w_640,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b13632_592936a53e664fd48316421c4b2aafb9~mv2.jpg" 
                  alt="Beach Resort"
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">Beach Resorts</h3>
                <p className="text-sm text-gray-600">Luxurious beachfront getaways</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://i0.wp.com/highlatitudestyle.com/wp-content/uploads/2025/07/parents_wedding_day_w_restored_dress-1.webp?fit=1000%2C563&ssl=1" 
                  alt="Wildlife Resort"
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">Wildlife Resorts</h3>
                <p className="text-sm text-gray-600">Nature and luxury combined</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="https://hakone-japan.com/sustainable-tourism/wp-content/uploads/2024/01/1.jpg" 
                  alt="Mountain Resort"
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">Mountain Retreats</h3>
                <p className="text-sm text-gray-600">Serene mountain escapes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://images.jdmagicbox.com/v2/comp/hyderabad/b6/040pxx40.xx40.231230145855.b8b6/catalogue/mzu-iluxury-premium-service-center-manikonda-hyderabad-mobile-phone-repair-and-services-knzwwq1ew1-250.jpg"
              alt="Premium Service"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
            <p className="text-gray-600">24/7 concierge service and personalized attention to detail</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJK8i7Ykgtd9mbQo-Lj_UX1oi17CgiwLRnQ&s"
              alt="Luxury Amenities"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-spa"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Luxury Amenities</h3>
            <p className="text-gray-600">World-class facilities including spas, pools, and fine dining</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img 
              src="https://abilgroup.com/wp-content/uploads/2022/11/location-symbol-city-low-angle-1024x681.jpg"
              alt="Prime Locations"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
            <p className="text-gray-600">Handpicked resorts in the most scenic and convenient locations</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Enquire About Resort Packages
          </h2>
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Location</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="beach">Beach Resort</option>
                  <option value="mountain">Mountain Resort</option>
                  <option value="wildlife">Wildlife Resort</option>
                  <option value="heritage">Heritage Resort</option>
                  <option value="wellness">Wellness Resort</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                required
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors duration-300"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResortPackage; 