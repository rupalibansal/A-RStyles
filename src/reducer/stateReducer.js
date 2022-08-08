export const initialState = {
  itemsInBag: [],
  numberOfBagItems: 0,
  productsSortOrder: "",
};

export function stateReducer(state, action) {
  switch (action.type) {
    case "addToBag":
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
        return {
          itemsInBag: itemsInBagWithUpdatedQuantity,
          numberOfBagItems: state.numberOfBagItems + 1,
          productsSortOrder: state.productsSortOrder,
        };
      } else {
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
        return {
          itemsInBag: [...itemsInBagWithUpdatedQuantity],
          numberOfBagItems: state.numberOfBagItems - 1,
          productsSortOrder: state.productsSortOrder,
        };
      }

    case "removeProductFromBag":
      // remove object whose code matches with the item code
      let itemToBeDeletedQuantity;
      const updateItemsInBag = state.itemsInBag.filter((item) => {
        if (item.code === action.productDetail.code) {
          itemToBeDeletedQuantity = item.quantity;
        }
        return item.code !== action.productDetail.code;
      });
      return {
        itemsInBag: [...updateItemsInBag],
        numberOfBagItems: state.numberOfBagItems - itemToBeDeletedQuantity,
        productsSortOrder: state.productsSortOrder,
      };

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
