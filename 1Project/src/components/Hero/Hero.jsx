import React, { useState } from "react";

const Hero = () => {
  const [moreText, setmoreText] = useState("");

  return (
    <>
      <div className=" flex flex-col items-center shadow-lg w-[600px]  max-h-auto m-auto rounded-lg">
        <div>
          <img
            src="/images/patna.jpg"
            alt="patna yaar "
            className=" w-[600px] h-[300px] rounded-sm shadow-lg"
          />
        </div>
        <div className=" w-[600px] p-10">
          <div className=" flex justify-between ">
            <h1 className=" font-bold">Best Of Patna In 7 Days Tour</h1>
            <span className=" text-[#49A6E9] bg-green-100 px-2 py-0.5 rounded-sm font-semibold">
              $1,995
            </span>
          </div>
          <div className=" mt-5 tracking-wide">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              culpa corrupti, at esse ipsam soluta aperiam veniam facere nihil
              tenetur nemo natus maxime fuga ullam. Officiis tenetur labore
              beatae asperiores. Commodi non cupiditate porro et repellat
              facere, quo sit culpa reiciendis consectetur ea alias nisi quae
              voluptas voluptatem facilis assumenda. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Nihil necessitatibus tempore
              consequatur nostrum suscipit officiis cupiditate numquam libero
              tempora natus? Ea odio enim nulla eveniet vero, ut, praesentium
            </p>
          </div>
          <div className=" flex  justify-center mt-5">
            <button className=" bg-transparent text-red-500 px-4 py-1 rounded-md tracking-wider border-solid border-2 border-red-500 ">
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
