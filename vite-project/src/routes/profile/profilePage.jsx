import React from "react";
import "./profilePage.css";
import List from "../../components/list/list";
import Chat from "../../components/chat/chat";

const profilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>john@gmail.com</b>
            </span>
          </div>

          <div className="title">
            <h1 id="myList">My List</h1>
            <button id="myList">Add New Post</button>
          </div>

          <List />

          <div className="title">
            <h1 id="saved">Saved List</h1>
          </div>

          <List />
        </div>
      </div>
      <div className="chat">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default profilePage;
