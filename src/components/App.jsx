import React from "react";
import Home from "../pages/Home";
import DetailedEvent from "../pages/DetailedEvent";

function App() {
  return (
    <div>
      <div>
        <DetailedEvent eventId={5} />
      </div>
    </div>
  );
}

export default App;
