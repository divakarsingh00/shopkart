function PriceBlock({ price, mrp }) {
    const discount = Math.round(((mrp - price) / mrp) * 100);
  
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-gray-900">
            ₹{price.toLocaleString("en-IN")}
          </span>
  
          <span className="text-sm text-gray-500 line-through">
            ₹{mrp.toLocaleString("en-IN")}
          </span>
  
          <span className="text-sm font-semibold text-rating">
            {discount}% off
          </span>
        </div>
      </div>
    );
  }
  
  export default PriceBlock;