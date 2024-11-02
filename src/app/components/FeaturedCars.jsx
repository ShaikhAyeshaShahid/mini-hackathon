"use client";
import React from 'react';
import { useState } from 'react';
import corolla from "../images/Corolla-X-Cars-.jpg";
import alto from "../images/Suzuki_Alto_-_PNG.png";
import honda from "../images/Honda_City_Front.jpg";
import cover from "../images/Cover.jpg";
import Image from 'next/image';
import Link from 'next/link';

const cars = [
    {
        name: 'Toyota Corolla',
        price: 'PKR 59.7 - 75.5 lacs',
        reviews: 621,
        rating: 4,
        imageUrl: corolla
    },
    {
        name: 'Suzuki Alto',
        price: 'PKR 23.3 - 30.5 lacs',
        reviews: 199,
        imageUrl: alto,
        rating: 3,
    },
    {
        name: 'Honda City',
        price: 'PKR 46.5 - 58.5 lacs',
        reviews: 458,
        imageUrl: honda,
        rating: 4,
    },
    {
        name: 'Honda Civic',
        price: 'PKR 86.6 - 99.0 lacs',
        reviews: 357,
        imageUrl: cover,
        rating: 4,
    },
];

const FeaturedCars = () => {
    const [activeTab, setActiveTab] = useState('Popular');

    return (
        <div className="w-full bg-gray-100 py-8 px-4">
            <div className="flex justify-between items-center mb-4 px-4">
                <h2 className="text-2xl font-semibold text-gray-700">Featured New Cars</h2>
                <a href="#" className="text-blue-500">View All New Cars</a>
            </div>

            <div className="flex space-x-8 border-b px-4">
                {['Popular', 'Upcoming', 'Newly Launched'].map((tab) => (
                    <button
                        key={tab}
                        className={`text-lg pb-2 ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 px-4">
                {cars.map((car, index) => (
                    <Link href="/car_details" key={index}>
                        <div className="bg-white rounded-lg shadow-md p-4 text-center">
                            <Image alt="Logo" src={car.imageUrl} width={150} height={60} />
                            <h3 className="text-lg font-semibold text-blue-900">{car.name}</h3>
                            <p className="text-green-600">{car.price}</p>
                            <div className="flex justify-center items-center my-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < car.rating ? "text-yellow-500" : "text-gray-300"}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-gray-500">{car.reviews} Reviews</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCars;
