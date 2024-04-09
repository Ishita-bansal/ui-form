import React from "react";
import Navbar from "../navbar";
import Sidenav from "../sidenav";
import "./main.css";

const Maincontainer = ({elements}) =>{
    return(
        <>
             <div style={{ position: "relative" }}>
                <Sidenav/>
          {/* <h1 style={{position:"absolute",top:"120px" , left:"500px"}}>User Management</h1> */}
                <div className="display-data">
                    {elements}
                </div>  
                <Navbar/>  
           </div>
        </>
    )
}

export default Maincontainer;