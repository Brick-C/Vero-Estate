import React from "react";
import "./singlePage.css";
import Slider from "../../components/slider/slider";
import { singlePostData } from "../../lib/dummyData";
import { userData } from "../../lib/dummyData";
import Map from "../../components/map/map";

const singlePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
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
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="../images/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src="../images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src="../images/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="../images/size.png" alt="" />
              <span>80 sqft</span>
            </div>

            <div className="size">
              <img src="../images/bed.png" alt="" />
              <span>2 beds</span>
            </div>

            <div className="size">
              <img src="../images/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="../images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="../images/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src="../images/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src="../images/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="../images/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singlePage;
