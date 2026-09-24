import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Big Billion Style Deals",
    subtitle: "Up to 70% off on top products",
    button: "Shop Now",
    image: "https://picsum.photos/seed/shopkart-banner1/1400/400",
  },
  {
    id: 2,
    title: "Upgrade Your Tech",
    subtitle: "Latest smartphones and electronics",
    button: "Explore",
    image: "https://picsum.photos/seed/shopkart-banner2/1400/400",
  },
  {
    id: 3,
    title: "Fashion For Everyone",
    subtitle: "Trending styles at amazing prices",
    button: "View Deals",
    image: "https://picsum.photos/seed/shopkart-banner3/1400/400",
  },
];

function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % banners.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (current) => (current - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[currentIndex];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[220px] sm:h-[300px] lg:h-[360px]">
        <img
          src={banner.image}
          alt={banner.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-center">
          <div className="page-container">
            <div className="max-w-xl text-white">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider">
                ShopKart Exclusive
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {banner.title}
              </h1>

              <p className="mt-3 text-sm sm:text-base">
                {banner.subtitle}
              </p>

              <button
                type="button"
                className="mt-5 bg-accent px-6 py-3 text-sm font-bold text-gray-900 transition hover:brightness-95"
              >
                {banner.button}
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous banner"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next banner"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {banners.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to banner ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BannerCarousel;