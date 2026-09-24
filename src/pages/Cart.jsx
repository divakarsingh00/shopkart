import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, ShieldCheck } from "lucide-react";

import { useCart } from "../context/CartContext";
import QuantityStepper from "../components/QuantityStepper";
import EmptyState from "../components/EmptyState";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const deliveryCharge = cartTotal >= 500 ? 0 : 40;
  const finalTotal = cartTotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen px-4 py-10">
        <div className="page-container">
          <EmptyState
            title="Your cart is empty"
            message="Looks like you haven't added anything to your cart yet."
          />

          <div className="mt-5 text-center">
            <Link
              to="/products"
              className="inline-block bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="page-container py-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              My Cart
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
          >
            <Trash2 size={17} />
            Clear Cart
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <section className="rounded bg-white shadow-card">
            <div className="border-b border-gray-200 px-5 py-4">
              <h2 className="font-semibold text-gray-800">
                Cart Items
              </h2>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-5"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* Image */}
                    <Link
                      to={`/product/${item.id}`}
                      className="flex h-32 w-32 flex-shrink-0 items-center justify-center self-center sm:self-start"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </Link>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-base font-semibold text-gray-800 hover:text-primary"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-1 text-xs text-gray-500">
                        {item.brand}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span className="text-lg font-semibold text-gray-900">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.mrp.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <p className="mt-1 text-xs font-semibold text-rating">
                        {Math.round(
                          ((item.mrp - item.price) / item.mrp) * 100
                        )}
                        % off
                      </p>

                      {/* Quantity + Remove */}
                      <div className="mt-5 flex flex-wrap items-center gap-5">
                        <QuantityStepper
                          quantity={item.quantity}
                          onDecrease={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          onIncrease={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                        />

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-gray-500">
                        Item Total
                      </p>

                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        ₹
                        {(
                          item.price * item.quantity
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Price Summary */}
          <aside className="h-fit rounded bg-white shadow-card">
            <div className="border-b border-gray-200 px-5 py-4">
              <h2 className="text-sm font-semibold uppercase text-gray-500">
                Price Details
              </h2>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Price ({cartItems.length} items)
                </span>

                <span className="font-medium text-gray-800">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Delivery Charges
                </span>

                <span
                  className={
                    deliveryCharge === 0
                      ? "font-medium text-rating"
                      : "font-medium text-gray-800"
                  }
                >
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>
              </div>

              <div className="border-t border-dashed border-gray-300 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">
                    Total Amount
                  </span>

                  <span className="text-lg font-bold text-gray-900">
                    ₹{finalTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Demo checkout only. No payment gateway is connected."
                  )
                }
                className="flex w-full items-center justify-center gap-2 bg-buy py-3.5 text-sm font-bold text-white transition hover:brightness-95"
              >
                <ShoppingBag size={18} />
                PLACE ORDER
              </button>

              <div className="flex items-start gap-2 border-t border-gray-200 pt-4 text-xs text-gray-500">
                <ShieldCheck
                  size={18}
                  className="flex-shrink-0 text-rating"
                />

                <p>
                  Safe and secure shopping experience. This is a
                  demo checkout and no real payment is processed.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;