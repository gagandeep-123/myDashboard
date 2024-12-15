import React from 'react'
import { MdOutlineOndemandVideo } from "react-icons/md";

const Timeline = () => {
  return (
    <div className="bg-light rounded p-4 mt-3 timeline">
      <div className='d-flex justify-content-between'>
        <div className="fs-17 fw-bold text-start">TimeLine</div>
        <div className="fw-bolder font-size : larger">...</div>
      </div>

      <div className="mt-3">
        {[
          { title: "Create WireFrame", time: "32:54" },
          { title: "Logo Design", time: "30:54" },
          { title: "DashBoard Design", time: "22:55" },
          { title: "Landng Page", time: "30:50" },
        ].map((ele, idx) => {
          return (
            <div
              className={`d-flex align-items-center justify-content-between p-2 ${
                idx === 0 && "active"
              }`}
            >
              <div>
                <MdOutlineOndemandVideo />
                <span className="ps-3">{ele.title}</span>
              </div>
              <div>{ele.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline 