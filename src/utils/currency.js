// Assume base prices are stored in INR throughout the app.
const INR_TO_USD = 0.012; // approx. static rate

export const formatPrice = (amountINR, currency = "INR") => {
  if (currency === "USD") {
    const usd = amountINR * INR_TO_USD;
    return `$${usd.toFixed(2)}`;
  }
  // default INR formatting with Indian grouping
  return `₹${Number(amountINR).toLocaleString("en-IN")}`;
};
