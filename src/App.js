import React from "react";
import { Provider } from "react-redux";

import Video from "./components/Video";
import Sidebar from "./components/Sidebar";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Video></Video>
      <Sidebar></Sidebar>
    </Provider>
  );
}

export default App;
