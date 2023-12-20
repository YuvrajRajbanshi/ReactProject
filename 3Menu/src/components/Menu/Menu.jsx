import React from "react";

const Menu = ({ Api }) => {
  console.log(Api);
  return (
    <>
      {Api.map((curElem) => {
        const { id, title, price, img, desc } = curElem;
        return (
          <>
            <div className=" flex justify-center  flex-wrap my-7  ">
              <div
                key={id}
                className=" shadow-md rounded-md flex justify-center max-w-[600px]">
                <div>
                  <img src={img} alt="" className=" rounded-md" />
                </div>
                <div className=" p-5">
                  <div className=" flex justify-between ">
                    <h3 className="font-semibold">{title}</h3>
                    <span className=" font-semibold">${price}</span>
                  </div>

                  <div>
                    <p className=" text-gray-400">{desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* hello this is best for u my dear */}
          </>
        );
      })}
    </>
  );
};

export default Menu;
