import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";

const obj = [
  {
    Item: "Dashboard",
    Img: <MdDashboardCustomize />,
  },
  {
    Item: "Project",
    Img: <GoProjectRoadmap />,
  },
  {
    Item: "My Client",
    Img: <FaUserGroup/>,
  },
  {
    Item: "My Tasks",
    Img: <FaTasks/>,
  },
  {
    Item: "Message",
    Img: <FaMessage />,
  },
  {
    Item: "Billing",
    Img: <FaWallet/>,
  },
];

const Sidebar = () => {
  return (
      <div style={{marginRight : "15px"}} className='bg-light rounded sidebar h-100 '>
         <div style={{fontSize : "20px", fontWeight : "700"}} className='d-flex px-4 py-3'>Gagan's Code</div>
          <div>{obj.map((items,idx) => {
              return (
                <div
                  className={`content d-flex flex-row align-items-center justify-content-start ms-3 p-2 ${
                    idx === 0 &&
                    "active"
                  }`}
                >
                      <div className='me-2'>{ items.Img}</div>
                  <div>{items.Item}</div>
                </div>
              );
          })}</div>
      
      </div>
  )
}

export default Sidebar