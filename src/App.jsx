import "./App.scss";

import React from "react";
import Nav from "./components/Nav/Nav";
import Photo from "./components/Photo/Photo";
import cowImg from "./assets/images/cow.jpg";


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Photo imageSrc={cowImg} alt="image of a cow" />
    </div>
  );
};

export default App;
