function SkeletonLoader({ count = 8 }) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse overflow-hidden rounded bg-white shadow-card"
          >
            <div className="h-56 bg-gray-200" />
  
            <div className="space-y-3 p-4">
              <div className="h-3 w-16 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="h-5 w-20 rounded bg-gray-200" />
              <div className="h-10 w-full rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default SkeletonLoader;