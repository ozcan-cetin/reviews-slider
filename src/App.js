import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1 className="text-center text-capitalize">reviews</h1>
      <div className="container d-flex justify-content-center">
        <span className="left">
          <FiChevronLeft onClick={()=>setIndex(index > 0 ? index-1 : people.length - 1)}/>
        </span>
        <Slider people={people} index={index} setIndex={setIndex} />
        <span className="right">
          <FiChevronRight onClick={()=>setIndex(index < people.length -1 ? index + 1 : 0)}/>
        </span>
      </div>
    </div>
  );
}

export default App;
