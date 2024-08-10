import React, { CSSProperties } from "react";

const GridSkeletonLoader = ({ count = 9 }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Loader Items */}
        {Array(count)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse rounded-3xl h-48"
            />
          ))}
      </div>
    </div>
  );
};

export default GridSkeletonLoader;