import React, { useState } from "react";
import "./chat.css";

const chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit pisicingc...</p>
        </div>

        <div className="message">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit pisicing...</p>
        </div>

        <div className="message">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit pisicing...</p>
        </div>

        <div className="message">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit pisicing...</p>
        </div>

        <div className="message">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit pisicing...</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              John Doe
            </div>
            <span onClick={() => setChat(null)} className="close">
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default chat;
