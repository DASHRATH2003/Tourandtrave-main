import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo22.webp";

// Import images for the slider
const sliderImages = [
  "https://i.postimg.cc/z3Y1jGFN/tatainnova.jpg",
  "https://images.jdmagicbox.com/quickquotes/images_main/maruti-suzuki-swift-dzire-tour-s-bs6-pearl-metallic-arctic-white-271052469-42tlj.png",
  "https://tourandtrave-main.vercel.app/images/cars/image3.jpg",
  "https://www.financialexpress.com/wp-content/uploads/2020/08/Toyota-Fortuner-TRD-660.jpg",
  "https://imgd.aeplcdn.com/664x374/n/ima73cb_1726651.jpg?q=80",
  "https://5.imimg.com/data5/IK/YH/GLADMIN-9705085/force-tempo-traveller-500x500.jpg",

  "https://www.ecorentacar.com/wp-content/uploads/2024/09/Force-Urbania-04.jpg",

  "https://i.postimg.cc/9QjWPJL9/bus1.jpg",
  
];


// Image Slider Component
const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {sliderImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};


const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  const stats = [
    { number: 250, label: "Vehicles" },
    { number: 4500, label: "Users" },
    { number: 1500, label: "Trips" },
    { number: 9, label: "Years of Experience" },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* About Us Header */}
      <div
        className="relative bg-cover -mt-20 bg-center bg-no-repeat py-12 md:py-16"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/03/01/48/18/360_F_301481839_p4RvuPBeFTeNvDXyl2ez822gZhQ7ZWEF.jpg')",
        }}
      >
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-left mb-4 md:mb-6">
            ABOUT US
          </h1>
          <p className="text-white text-base md:text-lg font-bold leading-relaxed">
            We are a passionate team committed to delivering top-quality
            services and experiences to our clients. Our mission is to provide
            reliable solutions tailored to your needs— whether it's
            transportation, event planning, or corporate tours.
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
              <span className="absolute right-full mr-2 bg-black text-white text-sm font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                WhatsApp: +919916599719
              </span>
            </a>
            <a
              href="tel:+919916599719"
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors group relative"
            >
              <i className="fas fa-phone text-2xl"></i>
              <span className="absolute right-full mr-2 bg-black text-white text-sm font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                Call: +919916599719
              </span>
            </a>
            <a
              href="mailto:infovtt@varshadhaaratours.com"
              className="bg-black text-white p-3 hover:bg-gray-800 transition-colors group relative"
            >
              <i className="fas fa-envelope text-2xl"></i>
              <span className="absolute right-full mr-2 bg-black text-white text-sm font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
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

      {/* About Content */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Slider Side */}
          <div className="w-full md:w-1/2">
            <ImageSlider />
          </div>
          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4 md:mb-6">
              Welcome to VARSHADHAARA
            </h2>
            <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed">
              Varshadhaara Tours And Travels  is a company that serves
              business and clients who require professional, friendly and
              efficient organization of their outbound and inbound travel &
              tourism needs. We are known for providing quality services and
              have maintained a disciplined and friendly relationship with the
              company and the employees.
            </p>
            <br />
            <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed">
              Looking for a travel partner who understands your needs? We bring
              you tailor-made domestic and international packages, corporate
              travel solutions, and unmatched customer support. Your perfect
              journey starts with us – professional, reliable, and always one
              step ahead.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-yellow-400 py-8 md:py-16 mt-8 md:mt-16 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-white p-4">
                  <div className="text-3xl md:text-5xl font-bold mb-2">
                    <CountUpNumber end={stat.number} />
                    {stat.number !== 9 && "+"}
                  </div>
                  <div className="text-base md:text-xl font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objective and Operations Section */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Our Objective */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
                Our Objective
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
              <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed text-center">
                Proactively understand and meet client needs by constantly
                challenging ourselves to adopt innovative mobility solutions
                that will revolutionise the industry. Maintain constant and
                longterm quality standards. Guarantee value of money to
                customers. Our dedication to providing prompt and effective
                service has contributed to the growth of our loyal customer base
              </p>
            </div>

            {/* Our Operations */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">
                Our Operations
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6 md:mb-8"></div>
              <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed text-center">
                By operating 24 hours a day and 365 days in a year we ensure no
                demands go unattended, unsatisfied. In order to ensure error
                free and smooth service, we have appointed staffs specially to
                look over the operations of vehicles and will respond to any
                queries immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-users text-3xl md:text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-lg md:text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-gray-600 text-sm md:text-base font-bold">
              Dedicated professionals with years of experience in travel
              industry
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-clock text-3xl md:text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm md:text-base font-bold">
              Round-the-clock assistance for all your travel needs
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-shield-alt text-3xl md:text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-lg md:text-xl font-bold mb-2">Safe Travel</h3>
            <p className="text-gray-600 text-sm md:text-base font-bold">
              Your safety is our top priority during all journeys
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


