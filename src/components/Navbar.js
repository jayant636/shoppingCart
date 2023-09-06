import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BiCartAlt } from "react-icons/bi";
import { BsGeoAltFill, BsFillSearchHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full w-11/12 bg-slate-300   flex justify-around items-center">
      <div>
        <img
          className="h-20 w-50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cAgwfG2LMOYxe-XeRqAErBm2QoeZEN3wJQ&usqp=CAU"
        />
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <input type="text" placeholder="Search for a Product" />
        <div>
          <BsFillSearchHeartFill />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          <BsGeoAltFill />
        </span>
        <button>Click To set your location</button>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span>
          {" "}
          <VscAccount />
        </span>
        <div class="dropdown">
          <button class="dropbtn">Sign In</button>
          <div class="dropdown-content">
            <a href="#">My Profile</a>
            <a href="#">Orders</a>
            <a href="#">Wishlist</a>
            <a href="#">Rewards</a>
            <a href="#">Gift Card</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div>
          <BiCartAlt />
        </div>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
