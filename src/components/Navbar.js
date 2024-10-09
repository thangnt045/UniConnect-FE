import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
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
