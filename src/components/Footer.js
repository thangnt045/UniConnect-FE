import React from "react";
import { GetImage } from "../utils/GetImage";
import "../styles/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="./assets/images/vlu_logo.png"
            alt="Van Lang University Logo"
            className="logo-image"
          />
        </div>
        <div className="footer-address">
          <p>
            <strong>ĐỊA CHỈ</strong>
          </p>
          <p>
            <strong>Cơ sở 1:</strong> 45 Nguyễn Khắc Nhu, P.Cô Giang, Q1, TP.HCM
          </p>
          <p>
            <strong>Cơ sở 2:</strong> 233A Phan Văn Trị, Q.Bình Thạnh, TP.HCM
          </p>
          <p>
            <strong>Cơ sở chính:</strong> 69/68 Đặng Thùy Trâm, P.13, Q.Bình
            Thạnh, TP.HCM
          </p>
        </div>
        <div className="footer-contact">
          <p>
            <strong>LIÊN HỆ</strong>
          </p>
          <p>028 9999 0009</p>
          <p>028 8888 0008</p>
          <p>uniconnect@edu.vn</p>
        </div>
        <div className="footer-social">
          <p>
            <strong>THEO DÕI CHÚNG TÔI</strong>
          </p>
          <div className="social-icons">
            <GetImage
              image={"facebook_logo"}
              alt="facebook"
              size={{ width: 40, height: 40 }}
            />
            <a
              href="link_to_facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <GetImage
              image={"youtube_logo"}
              alt="youtube"
              size={{ width: 40, height: 40 }}
            />{" "}
            <a href="link_to_youtube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <GetImage
              image={"tiktok_logo"}
              alt="tiktok"
              size={{ width: 40, height: 40 }}
            />{" "}
            <a href="link_to_tiktok" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="link_to_youtube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
