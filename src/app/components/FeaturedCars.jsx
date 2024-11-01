"use client";
import React, { useState } from 'react';
import corolla from "../images/Corolla-X-Cars-.jpg";
import alto from "../images/Suzuki_Alto_-_PNG.png";
import honda from "../images/Honda_City_Front.jpg";
import cover from "../images/Cover.jpg";


const cars = [
    {
        name: 'Toyota Corolla',
        price: 'PKR 59.7 - 75.5 lacs',
        reviews: 621,
        imageUrl: corolla,
        rating: 4,
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
        <div className="w-full max-w-6xl mx-auto bg-gray-100 py-8 px-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Featured New Cars</h2>
                <a href="#" className="text-blue-500">View All New Cars</a>
            </div>

            {/* Tabs */}
            <div className="flex space-x-8 border-b">
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

            {/* Car Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {cars.map((car, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img src={car.imageUrl} alt={car.name} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-lg font-semibold text-blue-900">{car.name}</h3>
                        <p className="text-green-600">{car.price}</p>
                        <div className="flex justify-center items-center my-2">
                            {/* Rating Stars */}
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < car.rating ? "text-yellow-500" : "text-gray-300"}>
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">{car.reviews} Reviews</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCars
