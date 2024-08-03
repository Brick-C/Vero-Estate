import React from "react";
import "./profilePage.css";

const profilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="info">
            <div className="top">
              <div className="user">
                <img src="../images/user.png" alt="" />
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat"></div>
    </div>
  );
};

export default profilePage;
