import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="spinner custom-loader">
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default Spinner;
