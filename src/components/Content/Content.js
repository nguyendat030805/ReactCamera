import React from "react"
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Content = () =>{
  return (
    <div id = "container">
    <div id="content">
    <div id="left-content">
        <LeftContent></LeftContent>
    </div>
    <div id="right-content">
        <RightContent></RightContent>
    </div>
    <div style={{clear: 'both'}} />
</div>
    </div>
    
  );
}
export default Content;