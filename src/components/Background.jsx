import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
     
      <div className=" absolute top-[5%] w-full text-zinc-400 font-semibold flex justify-center text-xl ">
        Documents
      </div>
      <h1 className="absolute text-[20vw] font-semibold top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter text-zinc-900 ">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
