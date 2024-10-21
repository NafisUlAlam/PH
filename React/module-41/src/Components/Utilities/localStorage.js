const getStoredCart = () => {
  const str = localStorage.getItem("cart");
  if (str) return JSON.parse(str);
  return [];
};

const addToLS = (id) => {
  let arr = getStoredCart();
  arr.push(id);
  localStorage.setItem("cart", JSON.stringify(arr));
};

const removeFromLS = (id) => {
  let arr = getStoredCart();
  let newArr = arr.filter((arrId) => arrId !== id);

  localStorage.setItem("cart", JSON.stringify(newArr));
};

export { addToLS, getStoredCart, removeFromLS };
