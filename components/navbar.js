import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between align-middle py-4 md:px-16 px-2 bg-gray-400">
      <div className="flex justify-center align-middle gap-4">
        {/* <Image src="/Logo.jpg" alt="logo" width={35} height={35} /> */}
        <h1 className="my-auto text-lg md:text-2xl font-bold">Logo</h1>
        <h4 className="my-auto">Home</h4>
      </div>
      <div className="flex justify-center align-middle gap-4">
        <div className="px-2 md:px-4 py-2 bg-blue-200 rounded-lg font-bold">
          Login
        </div>
        <div className="px-2 md:px-4 py-2 bg-blue-100 rounded-lg font-bold">
          Signup
        </div>
      </div>
    </div>
  );
};

export default Navbar;
