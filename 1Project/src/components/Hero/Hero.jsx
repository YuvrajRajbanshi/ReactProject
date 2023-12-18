import React, { useState } from "react";

const Hero = ({ Api }) => {
  // const [moreText, setmoreText] = useState("");
  const [readMore, setreadMore] = useState(false);

  return (
    <>
      {Api.map((curElem) => {
        let info = curElem.description;
        return (
          <>
            <div className=" flex flex-col items-center shadow-lg w-[600px]  max-h-auto m-auto rounded-lg mb-16">
              <div>
                <img
                  src={curElem.image}
                  alt="patna yaar "
                  className=" w-[600px] h-[300px] rounded-sm shadow-lg"
                />
              </div>
              <div className=" w-[600px] p-10">
                <div className=" flex justify-between ">
                  <h1 className=" font-bold">{curElem.headlines}</h1>
                  <span className=" text-[#49A6E9] bg-green-100 px-2 py-0.5 rounded-sm font-semibold">
                    {curElem.price}
                  </span>
                </div>
                <div className=" mt-5 tracking-wide">
                  {/* <p>{des}</p> */}

                  <p>
                    {" "}
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                      className=" text-red-600"
                      onClick={() => setreadMore(!readMore)}>
                      {readMore ? "Show less" : "read more"}
                    </button>
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
      })}
    </>
  );
};

export default Hero;
