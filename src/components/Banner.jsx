import React from "react";
import "../styles/Banner.css";

const BannerComponent = () => {
  return (
    <div className="banner">
      <img
        className="banner-image"
        src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/438197818_456883800188156_2414080979367776266_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=HnRzJeseKE4Q7kNvgH0Mlqt&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=APfbR0j5gbUzHuXnNbRK5RG&oh=00_AYCu7jZcARu7uE8iadPcAgsaVZK496nO61_p8aiej1keYw&oe=670BC718"
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
          <button className="banner-button" id="banner-button">See Events</button>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
