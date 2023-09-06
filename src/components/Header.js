import React from "react";
import { BsFillTelephoneFill, BsCurrencyDollar } from "react-icons/bs";
import { FcPhone, FcInTransit, FcMindMap } from "react-icons/fc";
const Header = () => {
  return (
    <div className="flex flex-col bg-slate-300 justify-center items-center">
      <div className=" flex justify-center p-4 bg-cyan-500 w-full text-white place-items-center">
        <h5>Free Next day contactless Delivery | Shop Now</h5>
      </div>
      <div className="flex p-4  justify-around gap-14 ">
        <div className="flex justify-center items-center gap-2">
          <div>
            <FcInTransit />
          </div>
          <button>
            {" "}
            <h5>Free Next Day Delivery</h5>
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FcMindMap />
          </div>
          <button>
            {" "}
            <h5>Free Removal & recycling of Old Product</h5>
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <BsCurrencyDollar />
          </div>
          <button>
            {" "}
            <h5>Best Price Guarantee</h5>
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>
            <FcPhone />
          </div>
          <button>
            {" "}
            <h5>24*7 Customer Support</h5>
          </button>
        </div>
        <div className="flex gap-8">
          <button>About us</button>
          <div className="flex justify-center items-center gap-2">
            <div>
              <BsFillTelephoneFill />
            </div>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
