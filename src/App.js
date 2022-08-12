import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // setTimeout({
  //   setIndex(index > 0 ? index-1 : people.length - 1)
  // },1000)

  return (
    <div>
      <h1 className="text-center text-capitalize">reviews</h1>
      <div className="box d-flex justify-content-center text-center mt-4">
        <span className="left">
          <FiChevronLeft onClick={()=>setIndex(index - 1)}/>
        </span>
        <Slider people={people} index={index} setIndex={setIndex} />
        <span className="right">
          <FiChevronRight onClick={()=>setIndex(index + 1)}/>
        </span>
      </div>
    </div>
  );
}

export default App;
