import "./App.css";
import React from "react";

import Head from "./components/Head.js";
import Body from "./components/Body.js";
import store from "./utils/store.js";
import {Provider} from "react-redux";


function App() {
  return (
    <Provider store = {store} >
      <div className = "">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;



{/* 
      Head
      Body
        * Sidebar
            -MenuItems
        * MainContainer
            -ButtonsList (Top)
                --ButtonComponents
            -VideoContainer (Playable Videos)
                --VideoCard
      */}
