import React from "react";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";
import Registration from "./Registration";

function App() {
  return (
    <div>
      <div>
        {/* <Home /> */}
        <DetailedEvent eventId={8} />
        {/* <Registration eventId="1" /> */}
      </div>
    </div>
  );
}

export default App;
