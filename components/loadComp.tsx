export default function LoadingComp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-28 h-28" aria-label="Loading" role="status">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin">
          <div className="absolute top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        </div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-ping opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
