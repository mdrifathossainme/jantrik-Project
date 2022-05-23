import { useState } from "react";
import './Tab.css'

import { useNavigate } from "react-router-dom";
import NewArrival from "./NewArrival";
import Featured from "./Featured";
import TopRated from "./TopRated";
const Tabs=()=> {
  const [toggleState, setToggleState] = useState(1);
  const navigate=useNavigate()
const handleAllFood=()=>{
navigate('/allFood')
}
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          New Arrival
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Featured
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Top Rated
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
          <NewArrival/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
      <Featured/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <TopRated/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
