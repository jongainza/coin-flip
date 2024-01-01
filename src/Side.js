import React from "react";
import images from "./images";

const Side = () => {
  let ran = Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      {ran % 2 === 0 ? (
        <img src={images[0].cara} />
      ) : (
        <img src={images[0].cruz} />
      )}
    </div>
  );
};

export default Side;
