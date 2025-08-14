import React from "react";
import ImageSlider from '../ImageSlider';

const Grouptour = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://www.onthegotours.com/repository/OTG-group-at-the-Pyramids-in-Egypt--On-The-Go-Tours-522141513000782.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            Group tour 
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
          There's something special about traveling as a group — the laughter, the shared discoveries, and the unforgettable moments. 
          At VARSHADHAARA TOURS AND TRAVELS, we bring people together with thoughtfully planned group tour services that take the stress out of coordination.
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
                Varshadhaara Tours And Travels provides comprehensive group tour
                services. We specialize in organizing comfortable and
                well-coordinated transport for corporate events, school trips,
                and large group outings.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our group tour packages are designed to handle large groups
                efficiently while ensuring comfort and safety for all
                passengers. We provide modern vehicles and experienced drivers.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                There's something special about traveling as a group — the
                laughter, the shared discoveries, and the unforgettable moments.
                At Varshadhaara Tours And Travels, we bring people together with
                thoughtfully planned group tour services that take the stress
                out of coordination. From weekend getaways with friends to
                spiritual journeys with your community or company offsites, we
                manage every detail — comfortable transport, route planning,
                accommodations, and on-road assistance. .
              </p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://cdn.pixabay.com/photo/2016/02/05/10/17/tour-1180673_1280.jpg",
                "https://media.istockphoto.com/id/1189969435/photo/happy-big-family-hugging-together-in-mountains.jpg?s=612x612&w=0&k=20&c=kosPFr4Tcl8UmLLNog0MJ1Reuzt9kTvjLoKB0fPl96M=",
                "https://t3.ftcdn.net/jpg/04/20/41/68/360_F_420416800_vPkzecZfQOEUZwWgTDrMHVxfHpGu4sQp.jpg",
                "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGdyb3VwfGVufDB8fDB8fHww",
                "https://www.shutterstock.com/image-photo/venice-italy-september-18-2022-600nw-2364777167.jpg"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-bus"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Fleet Monitoring</h3>
            <p className="text-gray-600 font-bold">
              Real-time vehicle tracking for group coordination
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
            <p className="text-gray-600 font-bold">
              Available round the clock for your convenience
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Group Management</h3>
            <p className="text-gray-600 font-bold">
              Professional coordination for large groups
            </p>
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

export default Grouptour;
