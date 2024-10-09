import React from "react";
import "../styles/Banner.css";

const BannerComponent = () => {
  return (
    <div className="banner">
      <img className="banner-image" src="" alt="Orientation Day 2024" />
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
