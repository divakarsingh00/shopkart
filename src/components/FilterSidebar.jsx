import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  "Mobiles",
  "Electronics",
  "Fashion",
  "Home",
  "Appliances",
  "Beauty",
];

const priceRanges = [
  { label: "Under ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
  { label: "₹5,000 - ₹20,000", min: 5000, max: 20000 },
  { label: "₹20,000 - ₹50,000", min: 20000, max: 50000 },
  { label: "Above ₹50,000", min: 50000, max: Infinity },
];

const ratings = [4, 3, 2];

function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedRating,
  setSelectedRating,
  inStockOnly,
  setInStockOnly,
  onClear,
}) {
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    rating: true,
    availability: true,
  });

  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <aside className="w-full rounded bg-white shadow-card lg:w-64 lg:flex-shrink-0">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-800">
          Filters
        </h2>

        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold text-primary hover:underline"
        >
          CLEAR ALL
        </button>
      </div>

      {/* Category */}
      <div className="border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("category")}
          className="flex w-full items-center justify-between p-4 text-sm font-semibold"
        >
          Category

          {openSections.category ? (
            <ChevronUp size={17} />
          ) : (
            <ChevronDown size={17} />
          )}
        </button>

        {openSections.category && (
          <div className="space-y-3 px-4 pb-4">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === ""}
                onChange={() => setSelectedCategory("")}
              />
              All Categories
            </label>

            {categories.map((category) => (
              <label
                key={category}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                />

                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between p-4 text-sm font-semibold"
        >
          Price

          {openSections.price ? (
            <ChevronUp size={17} />
          ) : (
            <ChevronDown size={17} />
          )}
        </button>

        {openSections.price && (
          <div className="space-y-3 px-4 pb-4">
            {priceRanges.map((range) => {
              const rangeValue = `${range.min}-${range.max}`;

              return (
                <label
                  key={rangeValue}
                  className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === rangeValue}
                    onChange={() => setSelectedPrice(rangeValue)}
                  />

                  {range.label}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("rating")}
          className="flex w-full items-center justify-between p-4 text-sm font-semibold"
        >
          Customer Rating

          {openSections.rating ? (
            <ChevronUp size={17} />
          ) : (
            <ChevronDown size={17} />
          )}
        </button>

        {openSections.rating && (
          <div className="space-y-3 px-4 pb-4">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === 0}
                onChange={() => setSelectedRating(0)}
              />
              All Ratings
            </label>

            {ratings.map((rating) => (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating}
                  onChange={() => setSelectedRating(rating)}
                />

                {rating}★ & above
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection("availability")}
          className="flex w-full items-center justify-between p-4 text-sm font-semibold"
        >
          Availability

          {openSections.availability ? (
            <ChevronUp size={17} />
          ) : (
            <ChevronDown size={17} />
          )}
        </button>

        {openSections.availability && (
          <div className="px-4 pb-4">
            <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(event) =>
                  setInStockOnly(event.target.checked)
                }
              />

              In Stock Only
            </label>
          </div>
        )}
      </div>
    </aside>
  );
}

export default FilterSidebar;