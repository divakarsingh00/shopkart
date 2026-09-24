import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Zap, CheckCircle } from "lucide-react";

import products from "../data/products";
import RatingBadge from "../components/RatingBadge";
import PriceBlock from "../components/PriceBlock";
import QuantityStepper from "../components/QuantityStepper";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen px-4 py-12">
        <div className="page-container">
          <div className="rounded bg-white p-10 text-center shadow-card">
            <h1 className="text-2xl font-semibold text-gray-800">
              Product Not Found
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              The product you are looking for does not exist.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block bg-primary px-6 py-3 text-sm font-semibold text-white"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen">
      <div className="page-container py-6">
        {/* Back Button */}
        <Link
          to="/products"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        {/* Main Product Section */}
        <section className="overflow-hidden rounded bg-white shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="flex min-h-[420px] items-center justify-center border-b border-gray-200 p-8 lg:border-b-0 lg:border-r">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[420px] w-full object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-500">
                {product.brand}
              </p>

              <h1 className="mt-2 text-2xl font-semibold leading-8 text-gray-900 sm:text-3xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-3">
                <RatingBadge rating={product.rating} />

                <span className="text-sm text-gray-500">
                  {product.reviews.toLocaleString("en-IN")} Ratings &
                  Reviews
                </span>
              </div>

              <div className="my-6 border-t border-gray-200" />

              {/* Price */}
              <PriceBlock
                price={product.price}
                mrp={product.mrp}
              />

              {/* Stock */}
              <div className="mt-4">
                {product.inStock ? (
                  <div className="flex items-center gap-2 text-sm font-medium text-rating">
                    <CheckCircle size={18} />
                    In Stock
                  </div>
                ) : (
                  <p className="text-sm font-semibold text-red-600">
                    Currently unavailable
                  </p>
                )}
              </div>

              {/* Quantity */}
              {product.inStock && (
                <div className="mt-6">
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Quantity
                  </p>

                  <QuantityStepper
                    quantity={quantity}
                    onDecrease={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                    onIncrease={() =>
                      setQuantity((current) => current + 1)
                    }
                  />
                </div>
              )}

              {/* Buttons */}
              {product.inStock && (
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex flex-1 items-center justify-center gap-2 bg-cart px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-95"
                  >
                    <ShoppingCart size={19} />
                    ADD TO CART
                  </button>

                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="flex flex-1 items-center justify-center gap-2 bg-buy px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-95"
                  >
                    <Zap size={19} />
                    BUY NOW
                  </button>
                </div>
              )}

              {/* Delivery Information */}
              <div className="mt-7 rounded border border-gray-200 bg-gray-50 p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Delivery Information
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Free delivery available on this product.
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Delivery dates may vary depending on your location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mt-5 rounded bg-white p-6 shadow-card">
          <h2 className="border-b border-gray-200 pb-4 text-xl font-semibold text-gray-800">
            Product Description
          </h2>

          <p className="pt-5 text-sm leading-7 text-gray-600">
            {product.description}
          </p>
        </section>

        {/* Specifications */}
        <section className="mt-5 rounded bg-white shadow-card">
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Specifications
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-1 sm:grid-cols-3"
              >
                <div className="bg-gray-50 px-6 py-4 text-sm font-medium capitalize text-gray-600">
                  {key}
                </div>

                <div className="px-6 py-4 text-sm text-gray-800 sm:col-span-2">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-6 rounded bg-white p-5 shadow-card">
            <div className="mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Similar Products
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                More products from {product.category}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;