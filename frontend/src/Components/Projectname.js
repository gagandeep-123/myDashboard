import React from "react";
import ProgressBar from "./Progress";

const Projectname = () => {
  return (
    <div className="bg-light rounded p-4 h-300">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column align-items-start">
          <div className="fs-17 fw-bold">Project Name</div>
          <div style={{ fontSize: "13px", color: "grey", fontWeight: "500" }}>
            Company Name
          </div>
        </div>
        <div className="fw-bolder font-size : larger">...</div>
      </div>

      <div className="d-flex mt-3 justify-content-between">
        <div
          style={{
            backgroundColor: "#ecf4fb",
            color: "#134b7b",
            width: "100px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "9px",
          }}
        >
          In Progress
        </div>
        <div style={{ fontWeight: "600" }} className="text-danger">
          High Priority
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <div style={{ backgroundColor: "#9e9e9e", height: "2px" }}></div>
      </div>
      <div
        style={{ marginTop: "15px" }}
        className="d-flex flex-column align-items-start"
      >
        <div style={{ color: "grey" }} className="d-flex">
          Task Done :{" "}
          <p className="mb-1 fw-bold" style={{ marginLeft: "6px", color: "black" }}>
            35
          </p>
          /50
        </div>
        <div className="w-100 mb-4">
          <ProgressBar progress={70} label="Progress:" />
        </div>
        <div>
          <div style={{ backgroundColor: "#9e9e9e", height: "2px" }}></div>
          <div></div>
        </div>
        <div
          style={{
            border: "solid 2px #aa76b4",
            borderRadius: "11px",
            width: "175px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            color: "#aa76b4",
          }}
        >
          Due Date : 25 August
        </div>
      </div>
    </div>
  );
};

export default Projectname;
