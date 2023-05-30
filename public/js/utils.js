export const productUrlEncode = (code, brand) =>
  `${code}${brand}`.replace(/\W/i, "").toLowerCase();
export const priceToString = (price) => `$ ${parseInt(price) / 100}`;
