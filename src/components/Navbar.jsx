import React from "react";
import "../styles/Navbar.css";
import { GetImage } from "../utils/GetImage";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <GetImage
          image={"app_icon"}
          alt="app_logo"
          size={{ width: 30, height: 20 }}
        />
      </div>
      <ul className="navbar-links">
        <li id="to-home">
          <a href="#1">Trang Chủ</a>
        </li>
        <li>
          <a href="#2">Hội Nghị Sự Kiện</a>
        </li>
        <li>
          <a href="#3">Lịch Sự Kiện</a>
        </li>
        <li>
          <a href="#4">Sự Kiện Của Tôi</a>
        </li>
      </ul>
      <div className="navbar-signin">
        <button className="signin-button">Đăng Nhập</button>
      </div>
    </nav>
  );
};

export default Navbar;
