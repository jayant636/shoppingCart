import React from "react";
import Cards from "./Cards";

const Card = (props) => {
  let cart = props.cart;

  return (
    <div>
      <div className="  flex flex-wrap justify-center gap-4 mb-4">
        <Cards cart={cart} />
      </div>
    </div>
  );
};

export default Card;
