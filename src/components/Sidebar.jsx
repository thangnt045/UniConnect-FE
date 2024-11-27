import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#" className="sidebar-link">
              👤 Tài khoản
            </a>
          </li>
          <li>
            <a href="/events" className="sidebar-link active">
              ⭐ Sự kiện của tôi
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              📅 Lịch
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              ⚙️ Cài đặt
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
};

export default Sidebar;