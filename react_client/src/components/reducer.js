export const getBasketTotal = (item) => {
  return item.reduce((amount, items) => Number(items.text)+amount,0);
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return ([
        ...state,{
          title:action.item.title,
          imgSrc:action.item.imgSrc,
          id:action.item.id,
          text:action.item.text
        }
      ]);
    case "REMOVE_FROM_BASKET":
      return state.filter(item=>item.id!==action.id);
    default:
      return state;
  }
};
 



