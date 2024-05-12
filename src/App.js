import "./App.css";
import React from "react";

import Head from "./components/Head.js";
import Body from "./components/Body.js";


function App() {
  return (
    <div className = "">
      <Head />
      <Body />
    </div>
  );
}

export default App;



{/* 
      Head
      Body
        * Sidebar
            -MenuItems
        * MainContainer
            -ButtonsList
            -VideoContainer
                --VideoCard
      */}
