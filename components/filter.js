import axios from "axios";
import React, { useState } from "react";

const Filter = ({ setProperties }) => {
  const [city, setCity] = useState(null);
  const [availableFromDate, setAvailableFromDate] = useState(null);
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(60000);
  const [propertyType, setPropertyType] = useState(null);

  const getFilteredProperties = async () => {
    try {
      const query = {
        city,
        availableFromDate,
        minPrice,
        maxPrice,
        propertyType,
      };
      const response = await axios.get(
        "https://reunion-backend-as7o.onrender.com/filter-properties",
        { params: query }
      );
      console.log(response.data.data);
      setProperties(response.data.data);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-6 md:px-16 px-2">
      <h2 className="text-lg font-bold ">Search Properties for Rent</h2>
      <div className="flex lg:flex-row flex-col lg:justify-between bg-gray-400 px-6 py-4 rounded-3xl">
        <div className="p-2 lg:border-r-2 border-black">
          <p className="pl-1">City</p>
          {/* <button className="font-bold">Select Location</button> */}
          <select
            className="outline-none text-md bg-gray-400 px-4 border-r-8 border-gray-400 font-bold pl-0"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value="">Select Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div className="p-2 lg:border-r-2 border-black">
          <p>Available From</p>
          <input
            className="outline-none text-md bg-gray-400 px-4 border-r-8 border-gray-400 font-bold pl-0"
            type="date"
            onChange={(e) => setAvailableFromDate(e.target.value)}
          />
        </div>
        <div className="p-2 lg:border-r-2 border-black">
          <p>Price</p>
          {/* <h3 className="font-bold">Select Price Range</h3> */}
          <div className="flex gap-4">
            <div className="flex gap-2">
              <p className="font-bold">Min</p>
              <input
                type="number"
                className="w-16 outline-none text-xs font-bold"
                defaultValue="1000"
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Max</p>
              <input
                type="number"
                className="w-16 outline-none text-xs font-bold"
                defaultValue="60000"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="p-2 lg:border-r-2 border-black">
          <p className="pl-1">Property Type</p>
          {/* <h3 className="font-bold">Select Property Type</h3> */}
          <select
            className="outline-none text-md bg-gray-400 px-4 border-r-8 border-gray-400 font-bold pl-0"
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </div>
        <div className="">
          <button
            className="bg-violet-400 px-6 py-2 rounded-3xl mt-3"
            onClick={() => {
              getFilteredProperties();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
