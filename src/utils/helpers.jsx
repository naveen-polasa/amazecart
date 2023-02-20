export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(((number / 100) * 82).toFixed(0));
};

export const getUniqueValues = () => {};
