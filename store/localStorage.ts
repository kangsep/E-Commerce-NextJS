export const loadState = () => {
  try {
    const serialized = localStorage.getItem("app_state");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify({
      cart: state.cart,
      wishlist: state.wishlist,
    });
    localStorage.setItem("app_state", serialized);
  } catch (e) {
    // ignore error
  }
};