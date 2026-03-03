import React from "react";
import { FaDrumstickBite, FaLeaf } from "react-icons/fa6";

const FoodCard = ({ data }) => {
  console.log(data, "data");

  return (
    <div
      className="w-[250px] rounded-2xl border-2 border-[#ff4d2d] bg-white shadow-md overflow-hidden hover:shadow-xl
  transition-all duration-300 flex flex-col"
    >
      <div className="relative w-full h-[170px] flex justify-center items-center bg-white">
        <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow">
          {data?.foodType == "veg" ? (
            <FaLeaf className="text-green-500 text-lg" />
          ) : (
            <FaDrumstickBite className="text-red-500 text-lg" />
          )}
        </div>

        <img
          src={data?.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1 flex flex-col p-4">
        <h1 className="font-semibold tex-gray-900 text-base truncate">
          {data?.name}
        </h1>
      </div>
    </div>
  );
};

export default FoodCard;
