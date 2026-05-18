import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-orange-500 border-gray-700 rounded-full animate-spin"></div>
        {/* Text */}
        <p className="text-white mt-4 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;