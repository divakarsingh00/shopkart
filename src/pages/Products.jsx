import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import SkeletonLoader from "../components/SkeletonLoader";
import EmptyState from "../components/EmptyState";

import products from "../data/products";

function Products() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const categoryFromUrl = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromUrl);

  const [selectedPrice, setSelectedPrice] = useState("");

  const [selectedRating, setSelectedRating] = useState(0);

  const [inStockOnly, setInStockOnly] = useState(false);

  const [sortBy, setSortBy] = useState("relevance");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [query, categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (query) {
      const searchTerm = query.toLowerCase();

      result = result.filter((product) =>
        [
          product.name,
          product.brand,
          product.category,
          product.description,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm)
      );
    }

    // Category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Price
    if (selectedPrice) {
      const [min, max] = selectedPrice
        .split("-")
        .map(Number);

      result = result.filter((product) => {
        if (max === Infinity) {
          return product.price >= min;
        }

        return product.price >= min && product.price <= max;
      });
    }

    // Rating
    if (selectedRating > 0) {
      result = result.filter(
        (product) => product.rating >= selectedRating
      );
    }

    // Stock
    if (inStockOnly) {
      result = result.filter((product) => product.inStock);
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "discount") {
      result.sort((a, b) => {
        const discountA = ((a.mrp - a.price) / a.mrp) * 100;
        const discountB = ((b.mrp - b.price) / b.mrp) * 100;

        return discountB - discountA;
      });
    }

    return result;
  }, [
    query,
    selectedCategory,
    selectedPrice,
    selectedRating,
    inStockOnly,
    sortBy,
  ]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPrice("");
    setSelectedRating(0);
    setInStockOnly(false);
    setSortBy("relevance");
  };

  return (
    <main className="min-h-screen">
      <div className="page-container py-6">
        {/* Page Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-semibold text-gray-800">
            {query ? `Search results for "${query}"` : "All Products"}
          </h1>

          {!loading && (
            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>
          )}
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            onClear={clearFilters}
          />

          {/* Products */}
          <section className="min-w-0 flex-1">
            {/* Sort Bar */}
            <div className="mb-4 flex flex-col justify-between gap-3 rounded bg-white p-4 shadow-card sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Products
                </p>

                {!loading && (
                  <p className="text-xs text-gray-500">
                    Showing {filteredProducts.length} results
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="text-xs text-gray-500"
                >
                  Sort By:
                </label>

                <select
                  id="sort"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                  className="border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  <option value="relevance">
                    Relevance
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Customer Rating
                  </option>

                  <option value="discount">
                    Discount
                  </option>
                </select>
              </div>
            </div>

            {/* Loading */}
            {loading && <SkeletonLoader count={8} />}

            {/* Empty */}
            {!loading && filteredProducts.length === 0 && (
              <EmptyState
                title="No products found"
                message="Try changing your search or filters to find what you are looking for."
              />
            )}

            {/* Product Grid */}
            {!loading && filteredProducts.length > 0 && (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default Products;