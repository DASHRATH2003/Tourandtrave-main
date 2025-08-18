import React from 'react';
import ImageSlider from '../ImageSlider';

const SchoolTransport = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwdHJhbnNwb3J0fGVufDB8fDB8fHww&w=1000&q=80')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            SCHOOL TRANSPORTATION SERVICES
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            Safe and reliable school transportation services for students. We provide comfortable, well-maintained vehicles with experienced drivers to ensure the safety and punctuality of your children's daily commute to and from school.
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
                Varshadhaara Tours And Travels provides safe and reliable school transportation services. We understand the importance of your children's safety and ensure timely pick-up and drop-off with well-maintained vehicles and experienced drivers.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our school transportation service includes GPS tracking, regular vehicle maintenance, trained drivers with background verification, and real-time communication with parents. We prioritize safety, punctuality, and comfort for all students.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>We offer flexible transportation solutions for schools, colleges, and educational institutions. Our service covers both regular daily transportation and special event transportation for school functions and educational trips.</p>
            </div>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2">
            <ImageSlider 
              images={[
                "https://t3.ftcdn.net/jpg/04/58/08/30/360_F_458083018_GWf89ndA62i30YOJBD7rjUd30uXylPO5.jpg",
                "https://t3.ftcdn.net/jpg/03/74/84/48/360_F_374844890_9BEjaONmUjNPYfgRPdsEU2Czn6tlvCPv.jpg",
                "https://cdnsm5-ss10.sharpschool.com/UserFiles/Servers/Server_165690/Image/News/Kids%20on%20Bus.jpg",
                "https://www.democratandchronicle.com/gcdn/-mm-/ceb94ca35bbd9cad1de8209ed47450b634a4548f/c=0-571-3261-2413/local/-/media/Rochester/2014/12/05/B9315383941Z.1_20141205162754_000_GJS9B009E.1-0.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
              ]} 
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Safety First</h3>
            <p className="text-gray-600 font-bold">Verified drivers and GPS tracking</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Punctual Service</h3>
            <p className="text-gray-600 font-bold">Timely pick-up and drop-off</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-bus"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Well-Maintained Vehicles</h3>
            <p className="text-gray-600 font-bold">Regular maintenance and cleanliness</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* School Transport Image Slider Side */}
            <div className="md:w-1/2">                                         
              <div className="bg-gray-100 rounded-lg p-8">
                <ImageSlider images={[
                  "https://indiantravelhouse.com/wp-content/uploads/2024/05/school-bus-1.jpg",
                  "https://motorfloor.com/blog/wp-content/uploads/2024/03/group-min.jpg",
                  "https://www.schoolbuspune.com/images/banner2.jpg",
                  "https://academicworld.co.in/wp-content/uploads/2020/07/Transportation-Services1.jpg",
                  "https://indiantravelhouse.com/wp-content/uploads/2024/05/school-bus-1.jpg"
                ]} />
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Name <span className="text-blue-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <div className="text-sm text-gray-600 font-bold mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <div className="text-sm text-gray-600 font-bold mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Email <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Phone <span className="text-blue-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 font-bold mb-1">
                    Comment or Message{" "}
                    <span className="text-blue-500">*</span>
                  </label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-block bg-white text-blue-500 border-2 border-blue-500 px-8 py-2.5 rounded font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
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

export default SchoolTransport; 