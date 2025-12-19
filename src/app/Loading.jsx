import React from "react";

const Loading = () => {
  return (
    <div className="flex fixed inset-0 bg-[#F0E0D0]/90 overflow-hidden justify-center items-center z-50">
      <div className="animate-spin text-center mx-auto rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
    </div>
  );
};

export default Loading;
