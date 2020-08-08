export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        basket: [],
        user: null,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasKet = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasKet.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not exists`
        );
      }
      return { ...state, basket: newBasKet };
    default:
      return state;
  }
};

export default reducer;
