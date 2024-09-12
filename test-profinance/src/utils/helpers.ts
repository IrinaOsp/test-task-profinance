export const formatPrice = (price: number) =>
  parseFloat((price / 100).toFixed(2));
