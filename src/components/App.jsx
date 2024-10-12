import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";

function App() {
  const [page, setPage] = useState("HOMEPAGE")

  // Tìm nút trong banner và gắn function vào nút
  const setLinkForBannerBtn = () => {
    const bannerButton = document.getElementById("banner-button")

    const changeToDetails = () => {setPage("EVENT_DETAILS")}
  
    bannerButton.onclick = () => {changeToDetails()}
  }

  // Tìm nút Trang chủ và gắn function vào nút
  const HomeNavBar = () => {
    const homeButton = document.getElementById("to-home")

    const changeToHome = () => {setPage("HOMEPAGE")}

    homeButton.onclick = () => {changeToHome(); return false;}
  }

  // Chạy mỗi lần render
  useEffect(() => {
    try {
      setLinkForBannerBtn()
    } catch (e) {

    }
  })

  // Chạy mỗi lần render
  useEffect(() => {
    try {
      HomeNavBar()
    } catch (e) {
      
    }
  })

  return (
    // <div>
    //   <div>
    //     <DetailedEvent eventId={5} />
    //   </div>
    // </div>
    <>
      {page === "HOMEPAGE" ? <Home /> : null}
      {page === "EVENT_DETAILS" ? <DetailedEvent eventId={5} /> : null}
    </>
  );
}

export default App;
