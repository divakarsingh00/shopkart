function QuantityStepper({ quantity, onDecrease, onIncrease }) {
    return (
      <div className="inline-flex items-center border border-gray-300">
        <button
          type="button"
          onClick={onDecrease}
          className="flex h-9 w-9 items-center justify-center text-lg hover:bg-gray-100"
        >
          −
        </button>
  
        <span className="flex h-9 w-10 items-center justify-center border-x border-gray-300 text-sm font-medium">
          {quantity}
        </span>
  
        <button
          type="button"
          onClick={onIncrease}
          className="flex h-9 w-9 items-center justify-center text-lg hover:bg-gray-100"
        >
          +
        </button>
      </div>
    );
  }
  
  export default QuantityStepper;