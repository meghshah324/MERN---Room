import React from 'react';

export default function PersonalDetails() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            {/* Logo */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    <span className="text-black">Room</span>
                    <span className="text-green-500">Wise</span>
                </h1>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-3xl bg-white border-2 rounded-lg p-10">
                {/* Heading */}
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
                    You are Almost Done!
                </h2>
                <p className="text-center text-sm text-gray-500 mb-8">
                    Please fill below details to continue.
                </p>

                {/* Form */}
                <form className="border-none">
                    {/* Your Name */}
                    <div className="mb-6 flex items-center">
                        <label className="block text-gray-700 font-medium w-1/3">
                            Your Name*
                        </label>
                        <input
                            type="text"
                            placeholder="Please enter your name"
                            className="border border-gray-300 rounded-lg p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Who You Are */}
                    <div className="mb-6 flex items-center">
                        <label className="block text-gray-700 font-medium w-1/3">
                            Who You Are*
                        </label>
                        <select
                            className="border border-gray-300 rounded-lg p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option>You are looking for a Flat/Flatmate/PG</option>
                            <option>Looking for a Flat</option>
                            <option>Looking for a Flatmate</option>
                            <option>Looking for a PG</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div className="mb-6 flex items-center">
                        <label className="block text-gray-700 font-medium w-1/3">
                            Your Gender*
                        </label>
                        <div className="flex space-x-4 w-2/3">
                            <button
                                type="button"
                                className="py-2 text-center rounded-lg border border-gray-300 bg-green-500 text-white hover:bg-green-600 w-1/2"
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                className="py-2 text-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 w-1/2"
                            >
                                Female
                            </button>
                        </div>
                    </div>

                    {/* Select City */}
                    <div className="mb-6 flex items-center">
                        <label className="block text-gray-700 font-medium w-1/3">
                            Please select the city*
                        </label>
                        <select
                            className="border border-gray-300 rounded-lg p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Hyderabad</option>
                        </select>
                    </div>

                    {/* Profile Picture */}
                    <div className="mb-8 flex items-center">
                        <label className="block text-gray-700 font-medium mb-2 w-1/3">
                            Profile Picture (Optional)
                        </label>
                        <div className="flex items-center justify-center  h-24 border-2 border-dashed border-gray-300 rounded-lg w-2/3">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mt-2">
                                    Click or Drop to upload profile image (jpg or png)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-2/3 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
