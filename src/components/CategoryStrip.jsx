import { Link } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Shirt,
  Home,
  Refrigerator,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Mobiles",
    icon: Smartphone,
  },
  {
    name: "Electronics",
    icon: Laptop,
  },
  {
    name: "Fashion",
    icon: Shirt,
  },
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Appliances",
    icon: Refrigerator,
  },
  {
    name: "Beauty",
    icon: Sparkles,
  },
];

function CategoryStrip() {
  return (
    <div className="border-b border-gray-200 bg-white shadow-sm">
      <div className="page-container overflow-x-auto">
        <div className="flex min-w-max items-center justify-center gap-8 py-4 md:gap-12">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={`/products?category=${encodeURIComponent(
                  category.name
                )}`}
                className="group flex min-w-[80px] flex-col items-center gap-2 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition group-hover:bg-blue-50">
                  <Icon
                    size={25}
                    className="text-gray-700 transition group-hover:text-primary"
                  />
                </div>

                <span className="text-xs font-medium text-gray-700 group-hover:text-primary">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryStrip;