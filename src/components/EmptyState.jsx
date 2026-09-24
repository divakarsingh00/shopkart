import { SearchX } from "lucide-react";

function EmptyState({
  title = "No products found",
  message = "Try changing your search or filters.",
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded bg-white p-8 text-center shadow-card">
      <SearchX size={52} className="mb-4 text-gray-400" />

      <h2 className="text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;