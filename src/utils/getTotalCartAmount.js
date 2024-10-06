

export const getTotalCartAmount = (cart) =>
  cart?.length > 0 && cart.reduce((acc, cur) => acc + cur.price, 0);
