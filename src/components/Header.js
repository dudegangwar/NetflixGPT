import React from "react";

const Header = () => {
  return (
    <div className="absolute flex px-4 justify-between items-center bg-white w-full shadow-lg">
      <div className=" py-2 z-10">
        <img
          className="w-44"
          src="https://study.iitm.ac.in/ds/assets/img/IITMOD-Logo.svg"
          alt="IITM Logo"
        />
      </div>
       <div>
        <button className="bg-[#771F19] text-white p-2 rounded-md px-5 m-2">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
