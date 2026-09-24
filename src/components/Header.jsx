import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

function Header() {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const [searchText, setSearchText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchText.trim();

    if (!query) {
      navigate("/products");
      return;
    }

    navigate(`/products?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="page-container">
        <div className="flex min-h-[64px] items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex min-w-fit flex-col leading-none"
          >
            <span className="text-xl font-bold italic sm:text-2xl">
              ShopKart
            </span>

            <span className="mt-1 text-[10px] text-white/80">
              Explore <span className="font-bold text-accent">Plus</span>
            </span>
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mx-auto hidden max-w-2xl flex-1 md:flex"
          >
            <div className="flex w-full overflow-hidden rounded bg-white">
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search for products, brands and more"
                className="h-10 flex-1 px-4 text-sm text-gray-800 outline-none"
              />

              <button
                type="submit"
                className="flex w-12 items-center justify-center text-primary"
                aria-label="Search"
              >
                <Search size={21} />
              </button>
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="ml-auto hidden items-center gap-5 md:flex">
            <Link
              to="/login"
              className="flex items-center gap-2 rounded bg-white px-5 py-2 text-sm font-semibold text-primary transition hover:bg-gray-100"
            >
              <User size={17} />
              Login
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-sm font-semibold"
            >
              <ShoppingCart size={22} />
              Cart

              {cartCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-cart px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Cart */}
          <Link
            to="/cart"
            className="relative ml-auto flex md:hidden"
            aria-label="Cart"
          >
            <ShoppingCart size={23} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-cart px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="pb-3 md:hidden"
        >
          <div className="flex overflow-hidden rounded bg-white">
            <input
              type="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search products..."
              className="h-10 flex-1 px-4 text-sm text-gray-800 outline-none"
            />

            <button
              type="submit"
              className="flex w-12 items-center justify-center text-primary"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded px-3 py-2 text-sm hover:bg-white/10"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded px-3 py-2 text-sm hover:bg-white/10"
              >
                All Products
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded px-3 py-2 text-sm hover:bg-white/10"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;