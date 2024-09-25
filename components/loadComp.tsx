import { Skeleton } from "./ui/skeleton";

export function SkeletonLoader() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-48 w-full bg-gray-300 rounded-lg" />
              <Skeleton className="h-4 bg-gray-300 w-3/4" />
              <Skeleton className="h-4 bg-gray-300 w-1/2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-8 bg-gray-300 w-8 rounded-full" />
                <Skeleton className="h-4 bg-gray-300 w-1/4" />
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        <Skeleton className="h-10 bg-gray-300 w-10 rounded" />
        <Skeleton className="h-10 bg-gray-300 w-32" />
        <Skeleton className="h-10 bg-gray-300 w-10 rounded" />
      </div>
    </>
  );
}
