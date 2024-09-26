import React from "react";

export default function ActivityCardSkeleton() {
  return (
    <div>
      <div>
        <div>
          <ul className="space-y-4">
            {[1, 2, 3].map((index) => (
              <li key={index} className="flex px-8 pb-4 items-center">
                <div className="bg-gray-200 p-2 rounded-full mr-3 animate-pulse">
                  <div className="w-4 h-4"></div>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
