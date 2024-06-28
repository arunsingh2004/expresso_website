import React from "react";

export default function Art() {
  return (
    <>
      <div className="h-screen w-full text-white text-center flex items-center justify-center bg-[url(/art-bg.png)] bg-cover min-h-[400px]">
        <div className={`text-[24vw] relative z-10 font-antonio`}>ART</div>
      </div>
    </>
  );
}