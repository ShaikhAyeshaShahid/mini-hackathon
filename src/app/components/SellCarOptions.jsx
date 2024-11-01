import React from 'react'

const SellCarOptions = () => {
    return (
        <div className="flex flex-col items-center py-8 px-4 bg-gray-100 border border-gray-300 rounded-md  justify-center">
            {/* <div className="relative w-full max-w-4xl justify-center">
                <p
                    className="text-2xl font-semibold text-center bg-gray-100 inline-block"
                    style={{
                        color: "#233d7b",
                        position: "relative",

                    }}
                >
                    Sell Your Car on PakWheels and Get the Best Price
                </p>
            </div> */}




            <p
                className="text-2xl font-semibold text-center bg-gray-100 inline-block"
                style={{
                    color: "#233d7b",
                    position: "relative",

                }}
            >
                Sell Your Car on PakWheels and Get the Best Price
            </p>




            <div className="w-full max-w-4xl border border-gray-300 rounded-md  shadow-md mt-4 p-4 md:p-8">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md w-full md:w-1/2 text-center mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "#233d7b" }}>
                            Post your Ad on PakWheels
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-1 text-start">
                            <li>✅ Post your Ad for Free in 3 Easy Steps</li>
                            <li>✅ Get Genuine offers from Verified Buyers</li>
                            <li>✅ Sell your car Fast at the Best Price</li>
                        </ul>
                        <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                            Post Your Ad
                        </button>
                    </div>
                    <div className="hidden md:flex items-center justify-center text-gray-500 font-bold">
                        OR
                    </div>

                    <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md w-full md:w-1/2 text-center">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "#233d7b" }}>
                            Try PakWheels Sell It For Me
                        </h3>
                        <ul className="text-sm text-gray-600 space-y-1 text-start">
                            <li>✅ Dedicated Sales Expert to Sell your Car</li>
                            <li>✅ We Bargain for you and share the Best Offer</li>
                            <li>✅ We ensure Safe & Secure Transaction</li>
                        </ul>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Register Your Car
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellCarOptions
