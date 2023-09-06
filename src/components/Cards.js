import React from "react";
import "../index.css";
import { BsCurrencyRupee } from "react-icons/bs";

const Cards = (props) => {
  let cart = props.cart.grid_layout;
  console.log(cart);

  const myStyle = {
    width: "300px",
    height: "700px",
  };
  return (
    <div className="grid grid-cols-3 grid-rows-10  gap-16 h-96 ">
      {cart.map((data) => {
        return (
          <div className="">
            <div>
              <img
                className="setImage"
                src={data.image_url}
                alt="Nothing to display"
                style={myStyle}
              />
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-blue-600 ">
                <h3>{data.name}</h3>
                <div className="flex items-center">
                  <span>
                    {" "}
                    <BsCurrencyRupee />
                  </span>
                  <h4>{data.offer_price}</h4>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
