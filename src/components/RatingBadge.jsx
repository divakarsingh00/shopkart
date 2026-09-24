function RatingBadge({ rating }) {
    return (
      <span className="inline-flex items-center gap-1 rounded bg-rating px-2 py-1 text-xs font-semibold text-white">
        <span>★</span>
        <span>{rating}</span>
      </span>
    );
  }
  
  export default RatingBadge;