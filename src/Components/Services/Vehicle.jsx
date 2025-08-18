import React from "react";
import ImageSlider from "../ImageSlider";

// Images for slider
const sliderImages = [
  "https://media.istockphoto.com/id/1456102192/photo/dealer-salesman-giving-car-key-to-owner-client-signing-insurance-document-or-rental-car-lease.jpg?s=612x612&w=0&k=20&c=OF95529tSw9EmiBcNi9frqZ6yudsylb9C0KKlGa4OK4=",
  "https://t4.ftcdn.net/jpg/05/15/30/57/360_F_515305790_58wwwoB0DbvAidgDZbK7U3ZPhUvvfjzy.jpg",
  "https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=",
  "https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI=",
  "https://www.shutterstock.com/image-photo/car-insurance-claim-form-toy-600nw-2294560535.jpg",
];

const Vehicle = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-[-100px]"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZALYu5EEzE9p_66k2clCJkkQ6TLDq8cRlyQ&s')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white text-left mb-6">
            VEHICLE INSURANCE SERVICE
          </h1>
          <p className="text-white text-lg font-bold leading-relaxed">
            We offer a wide range of vehicles for all your transportation needs. From luxury cars to buses, our fleet includes well-maintained vehicles with professional drivers to ensure safe and comfortable travel.
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
                Varshadhaara Tours And Travels offers a diverse fleet of vehicles to meet all your transportation needs. From luxury cars to spacious buses, we provide well-maintained vehicles with professional drivers to ensure safe and comfortable travel.
              </p>
              <p className="text-gray-700 font-bold leading-relaxed mb-6">
                Our vehicle fleet includes sedans, SUVs, luxury cars, and buses to accommodate different group sizes and travel preferences. We ensure all vehicles are well-maintained and driven by experienced professionals for your safety and comfort.
              </p>
              
              <p className='text-gray-700 font-bold leading-relaxed mb-6'>From individual travel to group transportation, our vehicle services are designed to provide comfort and reliability. Trust us to provide the perfect vehicle for your transportation needs.</p>
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
      <i className="fas fa-file-alt"></i> {/* Insurance Document Icon */}
    </div>
    <h3 className="text-xl font-bold mb-2">Policy Options</h3>
          <p className="text-gray-600 font-bold">
        Choose from a range of third-party and comprehensive insurance plans
      </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-red-500 text-4xl mb-4">
      <i className="fas fa-shield-alt"></i> {/* Protection/Shield Icon */}
    </div>
    <h3 className="text-xl font-bold mb-2">Coverage Protection</h3>
          <p className="text-gray-600 font-bold">
        Get coverage for theft, accident, natural disasters, and more
      </p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-red-500 text-4xl mb-4">
      <i className="fas fa-headset"></i> {/* Customer Support Icon */}
    </div>
    <h3 className="text-xl font-bold mb-2">Claim Assistance</h3>
          <p className="text-gray-600 font-bold">
        Fast and easy insurance claim support with expert help
      </p>
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
                 "https://shrikdtravels.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-29-at-2.23.46-PM-e1738042237763-1024x881.jpeg",
               
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

export default Vehicle;
