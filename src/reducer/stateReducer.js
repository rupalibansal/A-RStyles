export const initialState = {
  itemsInBag: [],
  numberOfBagItems: 0,
  productsSortOrder: "",
};

export function stateReducer(state, action) {
  console.log("cart previous state ", state);
  switch (action.type) {
    case "addToBag":
      console.log("handing addToBag action ", action);
      if (
        state.itemsInBag.length > 0 &&
        state.itemsInBag.filter(
          (item) => item.code === action.productDetail.code
        ).length > 0
      ) {
        const itemsInBagWithUpdatedQuantity = state.itemsInBag.map((item) => {
          if (item.code === action.productDetail.code) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        console.log(
          "item exists...updating quantity ",
          itemsInBagWithUpdatedQuantity
        );
        return {
          itemsInBag: itemsInBagWithUpdatedQuantity,
          numberOfBagItems: state.numberOfBagItems + 1,
          productsSortOrder: state.productsSortOrder,
        };
      } else {
        console.log("adding new item to bag");
        return {
          itemsInBag: [
            ...state.itemsInBag,
            {
              code: action.productDetail.code,
              name: action.productDetail.name,
              description: action.productDetail.description,
              price: action.productDetail.price,
              image: "123",
              quantity: 1,
            },
          ],
          numberOfBagItems: state.numberOfBagItems + 1,
          productsSortOrder: state.productsSortOrder,
        };
      }

    case "removeFromBag":
      console.log("handing removeFromBag action ", action);
      if (
        state.itemsInBag.length > 0 &&
        state.itemsInBag.filter(
          (item) => item.code === action.productDetail.code
        ).length > 0
      ) {
        const itemsInBagWithUpdatedQuantity = state.itemsInBag.map((item) => {
          if (item.code === action.productDetail.code) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
        console.log(
          "item exists...updating quantity ",
          itemsInBagWithUpdatedQuantity
        );
        return {
          itemsInBag: [...itemsInBagWithUpdatedQuantity],
          numberOfBagItems: state.numberOfBagItems - 1,
          productsSortOrder: state.productsSortOrder,
        };
      }

    case "sortProducts":
      return {
        itemsInBag: state.itemsInBag,
        numberOfBagItems: state.numberOfBagItems,
        productsSortOrder: action.productsSortOrder,
      };

    default:
      throw new Error();
  }
}
