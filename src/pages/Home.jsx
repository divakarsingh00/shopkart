import { Link } from "react-router-dom";
import BannerCarousel from "../components/BannerCarousel";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 8);
  const bestDeals = products.slice(8, 16);

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <BannerCarousel />

      <div className="page-container py-6">
        {/* Featured Products */}
        <section className="section-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Featured Products
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Top picks for you
              </p>
            </div>

            <Link
              to="/products"
              className="bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-blue-700"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* Best Deals */}
        <section className="section-card mt-6 overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Best Deals
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Grab these deals before they are gone
              </p>
            </div>

            <Link
              to="/products"
              className="bg-primary px-5 py-2 text-xs font-semibold text-white hover:bg-blue-700"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
            {bestDeals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </section>

        {/* Promotional Section */}
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded bg-primary p-6 text-white">
            <h3 className="text-lg font-bold">
              Electronics
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Upgrade your gadgets with exciting deals.
            </p>

            <Link
              to="/products?category=Electronics"
              className="mt-4 inline-block bg-white px-4 py-2 text-xs font-bold text-primary"
            >
              SHOP NOW
            </Link>
          </div>

          <div className="rounded bg-accent p-6 text-gray-900">
            <h3 className="text-lg font-bold">
              Fashion Sale
            </h3>

            <p className="mt-2 text-sm text-gray-700">
              Discover the latest styles at great prices.
            </p>

            <Link
              to="/products?category=Fashion"
              className="mt-4 inline-block bg-gray-900 px-4 py-2 text-xs font-bold text-white"
            >
              EXPLORE
            </Link>
          </div>

          <div className="rounded bg-buy p-6 text-white">
            <h3 className="text-lg font-bold">
              Home Essentials
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Make your home smarter and more comfortable.
            </p>

            <Link
              to="/products?category=Home"
              className="mt-4 inline-block bg-white px-4 py-2 text-xs font-bold text-buy"
            >
              DISCOVER
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;