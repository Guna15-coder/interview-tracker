import React from "react";

const Button = () => {
  return (
    <div>
      <button class="overflow-hidden relative w-32 h-10 bg-black text-white border-none  text-md mont-font cursor-pointer z-10 group">
        Add Goal
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-gray-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
        <span class="absolute w-36 h-32 -top-8 -left-2 bg-black rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
        <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute left-5 z-10 text-white">
          Add Goal
        </span>
      </button>
    </div>
  );
};

export default Button;
