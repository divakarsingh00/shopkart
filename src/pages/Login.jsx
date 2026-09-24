import { Link } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Demo login only. No backend is connected.");
  };

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-4xl overflow-hidden rounded bg-white shadow-card md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-primary p-10 text-white md:block">
          <h1 className="text-3xl font-bold">
            Login to ShopKart
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/80">
            Get access to your orders, wishlist, cart and personalized
            shopping experience.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <p>✓ Easy order tracking</p>
            <p>✓ Personalized recommendations</p>
            <p>✓ Faster checkout</p>
            <p>✓ Secure shopping experience</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Login
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your details to continue.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="flex items-center border border-gray-300">
                <Mail
                  size={18}
                  className="ml-3 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="h-11 w-full px-3 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center border border-gray-300">
                <LockKeyhole
                  size={18}
                  className="ml-3 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="h-11 w-full px-3 text-sm outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="primary-button w-full py-3 text-sm"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            New to ShopKart?{" "}
            <Link
              to="/"
              className="font-semibold text-primary hover:underline"
            >
              Continue Shopping
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;