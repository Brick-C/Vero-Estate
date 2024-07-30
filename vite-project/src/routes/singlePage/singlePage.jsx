import React from "react";
import "./singlePage.css";
import Slider from "../../components/slider/slider";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";

const singlePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top">
              <div className="post">
                <h2>{singlePostData.title}</h2>

                <div className="address">
                  <img src="../images/pin.png" alt="" />
                  <p id="address">{singlePostData.address}</p>
                </div>

                <span id="price">$ {singlePostData.price}</span>
              </div>

              <div className="user">
                <img src={userData.img} alt="" />
                <p>{userData.name}</p>
              </div>
            </div>

            <div className="bottom">{singlePostData.desc}</div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <h1>features</h1>
        </div>
      </div>
    </div>
  );
};

export default singlePage;
