function formatCurrency(amount) {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
  
  export default formatCurrency;