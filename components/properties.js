import Image from "next/image";
import React from "react";

const Properties = ({ properties }) => {
  //   console.log(properties);
  return (
    <div className="px-2 pb-8 md:px-16">
      <div className="w-full grid auto-cols-max gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {properties && properties.length ? (
          properties.map((property) => {
            const {
              _id,
              rent,
              propertyName,
              description,
              city,
              availableFromDate,
              propertyType,
              bathroom,
              bed,
              area,
            } = property;
            return (
              <div key={_id} className="rounded-lg overflow-hidden">
                <Image
                  src="/property-image.png"
                  alt="property-image"
                  width={250}
                  height={250}
                  className="w-full"
                />
                <div className="px-3 py-4 bg-gray-100">
                  <div className="flex">
                    <h4 className="text-md font-bold text-purple-500">
                      Rs {rent}
                    </h4>
                    <p className="text-xs mt-1">/month</p>
                  </div>
                  <h3 className="font-bold">{propertyName}</h3>
                  <h3 className="border-b-2 pb-1 border-gray-400">
                    {city}, India
                  </h3>
                  <div className="flex flex-col md:flex-row justify-between">
                    <p className="text-sm">{bed} beds</p>
                    <p className="text-sm">{bathroom} bathroom</p>
                    <p className="text-sm">{area} area</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : properties.length == 0 ? (
          <h1>No Such Properties</h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Properties;
