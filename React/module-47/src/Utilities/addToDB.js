const getLocalStorage = (str) => {
  let myStr;
  if (str === "read") myStr = localStorage.getItem("readList");
  else myStr = localStorage.getItem("wishList");
  if (!myStr) return [];
  //console.log(myStr);
  const myObj = JSON.parse(myStr);
  //console.log(myObj);
  return myObj;
};

const addToLocalStorage = (id, str) => {
  const myLocal = getLocalStorage(str);
  //console.log(Array.isArray(myLocal));
  if (!myLocal.includes(id)) {
    myLocal.push(id);
    const myLocalStr = JSON.stringify(myLocal);
    if (str === "read") localStorage.setItem("readList", myLocalStr);
    else localStorage.setItem("wishList", myLocalStr);
  }
};

export { getLocalStorage, addToLocalStorage };
