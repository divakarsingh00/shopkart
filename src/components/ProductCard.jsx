import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import RatingBadge from "./RatingBadge";
import PriceBlock from "./PriceBlock";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group overflow-hidden rounded bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-hover">
      <Link to={`/product/${product.id}`}>
        <div className="flex h-56 items-center justify-center bg-white p-5">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="border-t border-gray-100 p-4">
        <Link to={`/product/${product.id}`}>
          <p className="mb-1 text-xs font-medium text-gray-500">
            {product.brand}
          </p>

          <h3 className="line-clamp-2 min-h-[40px] text-sm font-semibold text-gray-800 hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2">
          <RatingBadge rating={product.rating} />

          <span className="ml-2 text-xs text-gray-500">
            {product.reviews.toLocaleString("en-IN")} reviews
          </span>
        </div>

        <div className="mt-3">
          <PriceBlock price={product.price} mrp={product.mrp} />
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-4 flex w-full items-center justify-center gap-2 bg-cart px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;