import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoundPost = () => {

    const foundpostInfo = useLoaderData();

    const handleFoundpost = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const productName = form.productName.value;
        const description = form.description.value;
        const possibleLocation = form.possibleLocation.value;
        const possibleDate = form.possibleDate.value;
        const image = form.image.value;
        const foundInfo = { category, productName, description, possibleLocation, possibleDate, image };
        console.log(category, productName, description, possibleLocation, possibleDate, image);

        fetch('http://localhost:5000/foundpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foundInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Found Post added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen mb-5 ">
            <div className=" max-w-3xl rounded-lg shadow-lg p-8 bg-[#EADBC8]">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800">Found Form :{foundpostInfo.length}</h2>
                <p className="text-center text-gray-600 mt-2">Fill out the form to submit a new post</p>

                {/* Form */}
                <form onSubmit={handleFoundpost} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-black">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            placeholder="Enter category"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Product Name */}
                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-black">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="Enter product name"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="possibleLocation" className="block text-sm font-medium text-black">
                            Location
                        </label>
                        <input
                            type="text"
                            id="possibleLocation"
                            placeholder="Enter location"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label htmlFor="possibleDate" className="block text-sm font-medium text-black">
                            Date
                        </label>
                        <input
                            type="date"
                            id="possibleDate"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-black">
                            Short Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter a short description"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="md:col-span-2">
                        <label htmlFor="image" className="block text-sm font-medium text-black">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="bg-white text-black mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className='md:col-span-2'>
                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit Post
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default FoundPost;