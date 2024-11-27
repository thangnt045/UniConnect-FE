import React, { useState } from "react";
import "../styles/Banner.css";

const BannerComponent = () => {
  // const [randomEvent, setRandomEvent] = useState((state) => {
  //   let i = Math.floor(Math.random() * state.allEvents.length)
  //   setRandomEvent(state.allEvents[i])
  // })
  return (
    <div className="banner">
      <img
        className="banner-image"
        src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
        alt="Orientation Day 2024"
      />
      <div className="banner-overlay">
        <div className="banner-info">
          <h1>ORIENTATION DAY 2024</h1>
          <p>Khoa Nghệ Thuật Ứng Dụng</p>
        </div>
        <div className="banner-content">
          <div className="banner-details">
            <p>Thời gian: 14:00 30/09/2024</p>
            <p>Toà G, CS3~Phòng G.9.21</p>
          </div>
          <button className="banner-button">See Events</button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
