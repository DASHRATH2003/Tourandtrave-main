import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const CarList = () => {
  // Car data based on the image
  const cars = [
    {
      id: 13,
      name: 'Luxury White Car 1',
      image: 'https://i.postimg.cc/kMwkFSh9/laxury1.png',
      seats: 'Luxury'
    },
    {
      id: 14,
      name: 'Luxury White Car 2',
      image: 'https://t3.ftcdn.net/jpg/06/50/57/76/360_F_650577635_GesSMihkw3BjAVXDAKcLeaC8Ec8yUbTq.jpg',
      seats: 'Luxury'
    },
    {
      id: 15,
      name: 'Luxury White Car 3',
      image: 'https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=',
      seats: 'Luxury'
    },
    {
      id: 16,
      name: 'Luxury White Car 4',
      image: 'https://i.postimg.cc/kG5YhjhC/laxury4.png',
      seats: 'Luxury'
    },
    {
      id: 17,
      name: 'Luxury White Car 5',
      image: 'https://i.postimg.cc/Y9rdhn7F/laxury5.png',
      seats: 'Luxury'
    },
    {
      id: 18,
      name: 'Luxury White Car 6',
      image: 'https://i.postimg.cc/gkXNXLCg/laxury6.png',
      seats: 'Luxury'
    },
    {
      id: 19,
      name: 'Luxury White Car 7',
      image: 'https://i.postimg.cc/NjRDbqfT/laxery7.png',
      seats: 'Luxury'
    },
    {
      id: 20,
      name: 'Luxury White Car 8',
      image: 'https://c4.wallpaperflare.com/wallpaper/863/488/920/ferrari-458-white-car-wallpaper-preview.jpg',
      seats: 'Luxury'
    },
    {
      id: 21,
      name: 'Luxury White Car 9',
      image: 'https://c4.wallpaperflare.com/wallpaper/809/225/171/ferrari-458-white-photo-6-wallpaper-preview.jpg',
      seats: 'Luxury'
    },
    {
      id: 1,
      name: 'Etios or Desire (Sedan)',
      image: '/images/cars/image1.webp',
      seats: 4
    },
    {
      id: 2,
      name: 'Innova or Ertiga or Xylo (SUV)',
      image: '/images/cars/TOYOTA.png',
      seats: 7
    },
    {
      id: 3,
      name: 'Innova Crysta (SUV Prime)',
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
    }
  ];

  return (
    <div className="bg-gray-100  py-16">
      <div className="container mx-auto px-4">
        {/* Header with background image */}
        <div className="relative mb-12  -mt-16 -ml-4  -mr-4 overflow-hidden">
          <img src="/images/cars/car-header-bg.svg" alt="Car Listing Header" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Car Listing</h1>
            <div className="flex justify-center items-center text-white">
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
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                  {car.seats} seats
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarList;

