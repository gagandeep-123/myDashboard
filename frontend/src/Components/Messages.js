import React from 'react'

const Messages = () => {
    const list = [
      {
        name: "Marwin Stock",
        photo: "./logo.png",
        about: "Novelist",
      },
      {
        name: "Stock cooper",
        photo: "./logo.png",
        about: "Author",
      },
      {
        name: "Jim Hooper",
        photo: "./logo.png",
        about: "Engineer",
      },
      {
        name: "Christine Watson",
        photo: "./logo.png",
        about: "Poet",
      },
      {
        name: "Santosh Tiwari",
        photo: "./logo.png",
        about: "Rider",
      },
    ];
  return (
    <div className="bg-light mt-3 rounded p-4">
      <div className="fs-17 fw-bold text-start">Messages</div>
      <div className='mt-3 hide-overflow'>
        {list.map((ele) => {
          return (
            <div className="d-flex mb-2 align-items-center">
              <img
                className="me-4"
                style={{ width: "40px", height: "40px" }}
                src={ele.photo}
              ></img>
              <div className="">
                <div className="fw-bold">{ele.name}</div>
                <div className="text-start fs-6 text-secondary fw-semibold">
                  {ele.about}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages