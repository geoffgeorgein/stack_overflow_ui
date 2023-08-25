import React, { useState } from "react";

const Topbar = () => {

    const[text,setText]=useState('')
    console.log(text)
  return (
    <div className=" fixed flex  items-center justify-center container p-x-5 py-4 z-10 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto min-w-[750px]">
        <div className="logo flex px-6">
          {" "}
          <img className="h-7 w-7 mr-1" src="/stack_overflow.png"></img> Stack
          <span className="font-bold">Overflow</span>
        </div>

        <input placeholder="Enter text" className="border-1 border-gray-700 p-2 mx-2 rounded-md" value={text} onChange={e=>setText(e.target.value)}></input>
        <div>
            <ul className="flex text-gray-500">
                <li className="px-1">Help</li>
                <li className="px-1">Tour</li>
                <li className="px-1">User</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
