import { useState } from "react";
import "./slider.css";

const slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="../images/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src="../images/arrow.png" id="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default slider;
