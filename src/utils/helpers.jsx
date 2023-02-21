export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(((number / 100) * 82));
};

export const getUniqueValues = (products, type) => {
  let unique = products.map((item) => item[type]);
  if(type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
};
