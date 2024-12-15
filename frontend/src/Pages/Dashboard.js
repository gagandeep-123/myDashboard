import React from 'react'
import Topbar from '../Components/Topbar'
import Sidebar from '../Components/Sidebar'
import Projectname from '../Components/Projectname';
import Timeline from '../Components/Timeline';
import Tasks from '../Components/Tasks';
import Calender from '../Components/Calender';
import Messages from '../Components/Messages';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="d-flex h-100">
      <div className="w-15 h-100">
        <Sidebar />
      </div>
      <div className="w-85">
        <div>
          <Topbar />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div style={{ width: "32%" }}>
            <Projectname />
            <div className="mt-3">
              <Projectname />
            </div>
          </div>
          <div style={{ width: "32%" }}>
            <Tasks />
            <Timeline />
          </div>
          <div style={{ width: "32%" }}>
            <Calender />
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard