import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const CarList = () => {
  // Car data reorganized: Regular cars first, then buses, then luxury cars
  const cars = [
    // Regular Cars (First Section)
    {
      id: 1,
      name: 'Etios or Dzire ',
      image: '/images/cars/image1.webp',
      seats: 4
    },
    {
      id: 2,
      name: 'Innova ',
      image: '/images/cars/TOYOTA.png',
      seats: 7
    },
    {
      id: 3,
      name: 'Innova Crysta (SUV Primium)',
      image: '/images/cars/image3.jpg',
      seats: 7
    },
    {
      id: 4,
      name: 'Innova Hycross Hybrid (SUV Luxury)',
      image: '/images/cars/innovaedit.jpg',
      seats: 7
    },
    {
      id: 22,
      name: 'Kia Seltos',
      image: 'https://img.autocarindia.com/Galleries/20190708023903_Kia-Seltos-white.jpg?w=640&q=75',
      seats: '5'
    },
    {
      id: 23,
      name: 'Kia Carens',
      image: 'https://www.cartoq.com/wp-content/uploads/2023/05/kia-carens-premium-to-xline-1.jpg',
      seats: '7'
    },
    {
      id: 24,
      name: 'Kia Carnival',
      image: 'https://imgd.aeplcdn.com/370x208/n/86elssa_1480025.jpg?q=80',
      seats: '7'
    },
    {
      id: 25,
      name: 'Fortuner',
      image: 'https://5.imimg.com/data5/NC/XN/DK/GLADMIN-82513544/fortuner-500x500-1000x1000.jpg',
      seats: '7'
    },
    {
      id: 26,
      name: 'Urbania',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Force/Urbania/11852/1750078302701/front-left-side-47.jpg',
      seats: '7'
    },
    {
      id: 27,
      name: 'Urbania 10+1',
      image: 'https://truckcdn.cardekho.com/in/force/urbania/force-urbania.jpg?impolicy=resize&imwidth=480',
      seats: '10+1 seats'
    },
    {
      id: 28,
      name: 'Urbania 12+1',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Force/Urbania/11852/1750078302701/front-left-side-47.jpg',
      seats: '12+1 seats'
    },
    {
      id: 29,
      name: 'Urbania 16+1',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Force/Urbania/11852/1750078302701/exterior-image-164.jpg',
      seats: '16+1 seats'
    },
    
    // Buses (Second Section)
    {
      id: 5,
      name: 'Force Traveller (Non-AC)',
      image: '/images/cars/force22.avif',
      seats: 12
    },
    {
      id: 6,
      name: 'Force Traveller (AC)',
      image: '/images/cars/image6.avif',
      seats: 12
    },
    {
      id: 7,
      name: 'Mini Bus (Non-AC)',
      image: '/images/cars/image7.jpg',
      seats: 21
    },
    {
      id: 8,
      name: 'Mini Bus (AC)',
      image: '/images/cars/temporent.jpg',
      seats: 21
    },
    {
      id: 9,
      name: 'Mini Bus 25 Seater (Non-ac)',
      image: '/images/cars/image9.jpg',
      seats: 25
    },
    {
      id: 10,
      name: 'Mini Bus 25 Seater (AC)',
      image: '/images/cars/image10.webp',
      seats: 25
    },
    {
      id: 11,
      name: 'Mini Bus 33 Seater (Non-ac)',
      image: '/images/cars/32seater.jpg',
      seats: 33
    },
    {
      id: 12,
      name: 'Mini Bus 33 Seater (AC)',
      image: '/images/cars/image12.png',
      seats: 33
    },
    {
      id: 30,
      name: '40 Seater Bus (AC)',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/PF/MD/IO/9177426/40-seater-bus-rental-bangalore.jpeg',
      seats: 40
    },
    {
      id: 31,
      name: '40 Seater Bus (Non-AC)',
      image: 'https://5.imimg.com/data5/NS/CR/GY/SELLER-80396449/35-seater-bus-hire-in-bangalore-35-seater-bus-rental-in-bangalore-500x500.jpg',
      seats: 40
    },
    {
      id: 32,
      name: '50 Seater Bus (AC)',
      image: 'https://lh4.googleusercontent.com/proxy/MSD2c_nx7uhLhRZcBBQdaE_i6GuD3sr6wSMVutBm9s30OIKYT47-Awt9J8BUo9dsrQFxsCyplgqnbUmShJejEz1l0kOG',
      seats: 50
    },
    {
      id: 33,
      name: '50 Seater Bus (Non-AC)',
      image: 'https://samarthtravels.com/images/keyword/33.jpg',
      seats: 50
    },
    
    // Luxury Cars (Third Section)
    {
      id: 13,
      name: 'BMW 7 Series',
      image: 'https://i.postimg.cc/kMwkFSh9/laxury1.png',
      seats: 'Luxury'
    },
    {
      id: 14,
      name: 'Mercedes-Benz S-Class',
      image: 'https://t3.ftcdn.net/jpg/06/50/57/76/360_F_650577635_GesSMihkw3BjAVXDAKcLeaC8Ec8yUbTq.jpg',
      seats: 'Luxury'
    },
    {
      id: 15,
      name: 'Audi A8 L',
      image: 'https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=',
      seats: 'Luxury'
    },
    {
      id: 18,
      name: 'Rolls-Royce Ghost',
      image: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/1-0-home/page-properties/rrmc-homepage-ghost-share-image.jpg',
      seats: 'Luxury'
    },
    {
      id: 19,
      name: 'BMW M5',
      image: 'https://i.postimg.cc/NjRDbqfT/laxery7.png',
      seats: 'Luxury'
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header with background image */}
        <div className="relative mb-12 -mt-16 -ml-4 -mr-4 overflow-hidden">
          <img src="/images/cars/car-header-bg.svg" alt="Car Listing Header" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Car Listing</h1>
            <div className="flex justify-center items-center text-white font-bold">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="mx-2">•</span>
              <span>Car Listing</span>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = '/images/cars/car-placeholder.svg';
                  }}
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-bold">
                  {car.seats} seats
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;

