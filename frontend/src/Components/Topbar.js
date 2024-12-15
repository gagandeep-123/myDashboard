import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-light rounded d-flex justify-content-between px-4 py-2">
      <div style={{alignItems : "center"}} className="d-flex">
              <div style={{ fontSize: "20px", fontWeight: "800"}}>Dashboard</div>
              <input style={{ backgroundColor: "#bcdee2", height: "37px", marginLeft: "10px", padding : "12px"}} className='rounded border none' type="text" placeholder="Search..."></input>
      </div>
      <div style={{alignItems : "center"}} className="d-flex">
              <img style={{ width: "61px", height: "55px", marginRight: "10px", padding : "10px" }} src="./logo.png"></img>
        <div className="d-flex flex-column">
          <div style={{fontSize: "14px", fontWeight : "800"}}>Gagan's Code</div>
          <div style={{fontSize : "12px", textAlign : 'start' , color : "grey" , fontWeight : "500"}}>Administrator</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar